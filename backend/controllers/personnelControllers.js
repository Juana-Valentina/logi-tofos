// C:\Users\Juana\OneDrive\Documentos\logi-tofos\backend\controllers\personnelControllers.js
const Personnel = require('../models/Personnel');
const PersonnelType = require('../models/PersonnelType');
const Contract = require('../models/Contract');

/**
 * Controlador: Obtener todo el personal
 * Acceso: Todos los roles (pero líderes solo ven personal activo)
 * Descripción: Recupera la lista completa de personal, con filtros según el rol del usuario
 */
exports.getAllPersonnel = async (req, res) => {
  try {
    // Filtro especial para líderes (solo personal disponible)
    const filter = req.userRole === 'lider' ? { status: 'disponible' } : {};
    
    // Parámetros de consulta (paginación, búsqueda y orden)
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const search = (req.query.search || '').toString().trim();
    const personnelTypeFilter = req.query.personnelType;
    const statusFilter = req.query.status;
    const sortBy = (req.query.sortBy || 'lastName').toString();
    const order = req.query.order === 'desc' ? -1 : 1;

    // Construir filtro adicional seguro a partir de query params
    if (personnelTypeFilter && /^[0-9a-fA-F]{24}$/.test(personnelTypeFilter)) {
      filter.personnelType = personnelTypeFilter;
    }
    if (statusFilter && ['disponible', 'asignado', 'vacaciones', 'inactivo'].includes(statusFilter)) {
      filter.status = statusFilter;
    }

    // Búsqueda segura: escapar entrada del usuario antes de crear RegExp
    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (search) {
      const safe = escapeRegex(search);
      const regex = new RegExp(safe, 'i');
      filter.$or = [
        { firstName: regex },
        { lastName: regex },
        { email: regex }
      ];
    }

    // Construir objeto de ordenamiento validando campos permitidos
    const allowedSortFields = ['lastName', 'firstName', 'email', 'createdAt'];
    const sortField = allowedSortFields.includes(sortBy) ? sortBy : 'lastName';
    const sortObj = { [sortField]: order };

    // Ejecutar consulta con paginación y conteo total
    const skip = (page - 1) * limit;
    const [total, personnel] = await Promise.all([
      Personnel.countDocuments(filter),
      Personnel.find(filter)
        .populate('personnelType', 'name rate') // Solo nombre y tarifa del tipo
        .sort(sortObj)
        .skip(skip)
        .limit(limit)
    ]);

    // Respuesta exitosa con paginación
    res.status(200).json({
      success: true,
      data: personnel,
      meta: {
        total,
        page,
        limit,
        pages: Math.max(1, Math.ceil(total / limit))
      }
    });
  } catch (error) {
    // Manejo de errores del servidor
    res.status(500).json({
      success: false,
      message: 'Error al obtener personal',
      error: error.message
    });
  }
};

/**
 * Controlador: Obtener personal por ID
 * Acceso: Todos los roles (pero líderes solo pueden ver activos)
 */
exports.getPersonnelById = async (req, res) => {
  try {
    // Buscar personal por ID con información de su tipo
    const person = await Personnel.findById(req.params.id)
      .populate('personnelType', 'name description rate');
      
    // Si no se encuentra el personal
    if (!person) {
      return res.status(404).json({
        success: false,
        message: 'Personal no encontrado'
      });
    }
    
    // Validación especial para líderes (solo pueden ver personal activo)
    if (req.userRole === 'lider' && person.status !== 'disponible') {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para ver este personal'
      });
    }
    
    // Respuesta exitosa con los datos encontrados
    res.status(200).json({
      success: true,
      data: person
    });
  } catch (error) {
    // Manejo de errores del servidor
    res.status(500).json({
      success: false,
      message: 'Error al obtener personal',
      error: error.message
    });
  }
};

/**
 * Controlador: Crear nuevo personal
 * Acceso: Solo administradores y coordinadores
 */
exports.createPersonnel = async (req, res) => {
  try {
    // Validar rol del usuario
    if (req.userRole !== 'admin' && req.userRole !== 'coordinador') {
      return res.status(403).json({
        success: false,
        message: 'Solo administradores y coordinadores pueden crear personal'
      });
    }

    // Extraer datos del cuerpo de la solicitud
    const { firstName, lastName, email, phone, personnelType, skills } = req.body;
    
    // Validar campos obligatorios
    if (!firstName || !lastName || !email || !personnelType) {
      return res.status(400).json({
        success: false,
        message: 'Nombre, apellido, email y tipo de personal son campos obligatorios'
      });
    }

    // Verificar que el tipo de personal exista
    const personnelTypeExists = await PersonnelType.findById(personnelType);
    if (!personnelTypeExists) {
      return res.status(404).json({
        success: false,
        message: 'El tipo de personal especificado no existe'
      });
    }

    // Crear nueva instancia del personal
    const person = new Personnel({
      firstName,
      lastName,
      email,
      phone,
      personnelType,
      skills: skills || [], // Habilidades opcionales (array vacío por defecto)
      status: 'disponible' // Estado por defecto
    });

    // Guardar en la base de datos
    const savedPersonnel = await person.save();
    
    // Respuesta exitosa (status 201 - Created)
    res.status(201).json({
      success: true,
      message: 'Personal creado exitosamente',
      data: savedPersonnel
    });
  } catch (error) {
    // Manejo especial para errores de duplicado (email único)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe personal con ese email',
        field: 'email'
      });
    }
    // Manejo de otros errores
    res.status(500).json({
      success: false,
      message: 'Error al crear personal',
      error: error.message
    });
  }
};

/**
 * Validar permisos de actualización según el rol
 */
const validateUpdatePermissions = (userRole, status) => {
  if (userRole !== 'admin' && userRole !== 'coordinador') {
    throw { status: 403, message: 'Solo administradores y coordinadores pueden actualizar personal' };
  }
  if (status && userRole === 'coordinador') {
    throw { status: 403, message: 'Coordinadores no pueden cambiar el estado del personal' };
  }
};

/**
 * Preparar datos de actualización validados
 */
const prepareUpdateData = async (requestData) => {
  const { firstName, lastName, email, phone, personnelType, skills, status } = requestData;
  const updateData = {};

  // Campos básicos
  if (firstName) updateData.firstName = firstName;
  if (lastName) updateData.lastName = lastName;
  if (email) updateData.email = email;
  if (phone) updateData.phone = phone;
  if (skills) updateData.skills = skills;
  if (status) updateData.status = status;

  // Validar tipo de personal
  if (personnelType) {
    const personnelTypeExists = await PersonnelType.findById(personnelType);
    if (!personnelTypeExists) {
      throw { status: 404, message: 'El tipo de personal especificado no existe' };
    }
    updateData.personnelType = personnelType;
  }

  return updateData;
};

/**
 * Controlador: Actualizar personal
 * Acceso: Solo administradores y coordinadores
 * Restricciones: Coordinadores no pueden cambiar estado
 */
exports.updatePersonnel = async (req, res) => {
  try {
    validateUpdatePermissions(req.userRole, req.body.status);
    const updateData = await prepareUpdateData(req.body);

    const updatedPersonnel = await Personnel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { 
        new: true,
        runValidators: true
      }
    ).populate('personnelType', 'name');

    if (!updatedPersonnel) {
      return res.status(404).json({
        success: false,
        message: 'Personal no encontrado'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Personal actualizado exitosamente',
      data: updatedPersonnel
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message
      });
    }
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe personal con ese email',
        field: 'email'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Error al actualizar personal',
      error: error.message
    });
  }
};

/**
 * Controlador: Eliminar personal
 * Acceso: Solo administradores
 * Validación: No se puede eliminar si está asignado a contratos
 */
exports.deletePersonnel = async (req, res) => {
  try {
    // Validar que el usuario sea administrador
    if (req.userRole !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Solo administradores pueden eliminar personal'
      });
    }

    // Validar formato del ID antes de hacer la consulta
    const personnelId = req.params.id;
    if (!personnelId || !/^[0-9a-fA-F]{24}$/.test(personnelId)) {
      return res.status(400).json({
        success: false,
        message: 'ID de personal inválido'
      });
    }

    // Verificar si el personal está asignado a algún contrato usando ID validado
    const contractWithPersonnel = await Contract.findOne({ 
      'personnel.person': personnelId
    }).select('_id');  // Solo necesitamos saber si existe
    
    // Prevenir eliminación si está en uso
    if (contractWithPersonnel) {
      return res.status(400).json({
        success: false,
        message: 'No se puede eliminar el personal porque está asignado a uno o más contratos'
      });
    }

    // Eliminar el personal
    const deletedPersonnel = await Personnel.findByIdAndDelete(req.params.id);
    
    // Si no se encuentra el personal
    if (!deletedPersonnel) {
      return res.status(404).json({
        success: false,
        message: 'Personal no encontrado'
      });
    }
    
    // Respuesta exitosa
    res.status(200).json({
      success: true,
      message: 'Personal eliminado correctamente'
    });
  } catch (error) {
    // Manejo de errores del servidor
    res.status(500).json({
      success: false,
      message: 'Error al eliminar personal',
      error: error.message
    });
  }
};