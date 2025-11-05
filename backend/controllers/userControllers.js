const User = require('../models/User'); // Importa el modelo de Usuario
const bcrypt = require('bcryptjs'); // Importa bcrypt para el hash de contraseñas

const User = require('../models/User'); // Importa el modelo de Usuario
const bcrypt = require('bcryptjs'); // Importa bcrypt para el hash de contraseñas

// Función auxiliar para validar si el rol puede ser actualizado
const validateRoleUpdate = (req, role) => {
    if (role) {
        if (req.userRole !== 'admin') {
            console.log('Usuario no admin intentando cambiar rol - denegado');
            return {
                isBlocked: true,
                status: 403,
                message: 'Solo administradores pueden cambiar roles'
            };
        }
        console.log('Admin cambiando rol a:', role);
    }
    return { isBlocked: false };
};

// Función auxiliar para validar si un coordinador intenta actualizar un admin
const validateCoordinatorUpdate = async (req, userId) => {
    if (req.userRole === 'coordinador') {
        const userToUpdate = await User.findById(userId);
        if (!userToUpdate) {
             // Este caso se manejará más adelante en findByIdAndUpdate
             return { isBlocked: false, userToUpdate: null };
        }
        if (userToUpdate.role === 'admin') {
            console.log('Acceso denegado: Coordinador intentando actualizar admin');
            return {
                isBlocked: true,
                status: 403,
                message: 'No puedes actualizar usuarios admin'
            };
        }
        return { isBlocked: false, userToUpdate: userToUpdate };
    }
    return { isBlocked: false, userToUpdate: null };
};

// Controlador para obtener todos los usuarios (solo accesible por administradores)
exports.getAllUsers = async (req, res) => {
  console.log('Iniciando getAllUsers');
  try {
    console.log('Validando rol de usuario');

    let users; // ✅ Declaración de la variable antes de usarla

    if (req.userRole === 'auxiliar') {
      // Solo ve su propio usuario
      users = await User.find({ _id: req.userId }).select('-password');
    } else if (req.userRole === 'coordinador') {
      // Ve a todos menos los administradores
      users = await User.find({ role: { $ne: 'admin' } }).select('-password');
    } else {
      // Admin ve todos los usuarios
      users = await User.find().select('-password');
    }

    console.log('Usuarios encontrados:', users.length);

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error en getAllUsers:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuarios',
      error: error.message
    });
  } finally {
    console.log('Finalizando getAllUsers');
  }
};

/**
 * Controlador: Obtener usuario por ID
 * Acceso: Todos los roles (pero solo pueden ver su propio perfil)
 */
exports.getUserById = async (req, res) => {
  console.log(`Iniciando getUserById para ID: ${req.params.id}`);
  try {
    // Validación: Líderes y Auxiliares solo pueden ver su propio perfil
    if (req.userRole === 'lider' || req.userRole === 'auxiliar') {
      if (req.userId !== req.params.id) {
        console.log('Acceso denegado: Usuario intentando ver otro perfil');
        return res.status(403).json({
          success: false,
          message: 'Solo puedes ver tu propio perfil'
        });
      }
    }

    // Busca el usuario excluyendo la contraseña
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    console.log('Usuario encontrado:', user._id);
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error en getUserById:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al obtener usuario',
      error: error.message
    });
  }
};

/**
 * Controlador: Actualizar usuario (REFFACTORIZADO)
 * Acceso: Líderes solo su propio perfil. Coordinadores y Admin pueden ver otros.
 * Restricciones: Coordinadores no pueden actualizar admin. Solo Admin puede cambiar roles.
 */
exports.updateUser = async (req, res) => {
  console.log(`Iniciando updateUser para ID: ${req.params.id} con datos:`, req.body);
  try {
    const { document, fullname, username, email, password, role, active } = req.body;
    const updateData = {};
    
    // 1. Guard Clause: Líderes solo pueden actualizar su propio perfil
    if (req.userRole === 'lider' && req.userId !== req.params.id) {
        console.log('Acceso denegado: Lider intentando actualizar otro perfil');
        return res.status(403).json({
            success: false,
            message: 'Solo puedes actualizar tu propio perfil'
        });
    }

    // 2. Guard Clause: Coordinadores no pueden actualizar administradores
    const coordinatorCheck = await validateCoordinatorUpdate(req, req.params.id);
    if (coordinatorCheck.isBlocked) {
        return res.status(coordinatorCheck.status).json({
            success: false,
            message: coordinatorCheck.message
        });
    }

    // 3. Guard Clause: Solo Admin puede cambiar roles
    const roleCheck = validateRoleUpdate(req, role);
    if (roleCheck.isBlocked) {
        return res.status(roleCheck.status).json({
            success: false,
            message: roleCheck.message
        });
    }
    
    // 4. Construye el objeto de actualización
    if (document) updateData.document = document;
    if (fullname) updateData.fullname = fullname;
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    // Corregir potential S7741 (typeof) en 'active' si existe en otra versión del código
    if (typeof active === 'boolean') updateData.active = active; 
    
    if (role) updateData.role = role;
    
    // 5. Hash de Contraseña
    if (password) {
      console.log('Actualizando contraseña (hash)');
      updateData.password = await bcrypt.hash(password, 10);
    }
    
    console.log('Datos a actualizar:', updateData);
    
    // 6. Ejecuta la actualización
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } // Devuelve el documento actualizado
    ).select('-password'); // Excluye la contraseña en la respuesta

    if (!updatedUser) {
      console.log('Usuario no encontrado para actualizar');
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    console.log('Usuario actualizado exitosamente:', updatedUser._id);
    res.status(200).json({
      success: true,
      message: 'Usuario actualizado correctamente',
      data: updatedUser
    });
  } catch (error) {
    // Manejo especial para errores de duplicado (email o username único)
    if (error.code === 11000) {
      const duplicateField = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `Ya existe un usuario con ese ${duplicateField}`,
        field: duplicateField
      });
    }
    console.error('Error en updateUser:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar usuario',
      error: error.message
    });
  }
};

/**
 * Controlador: Eliminar usuario
 * Acceso: Solo administradores
 * Restricciones: No puede auto-eliminarse
 */
exports.deleteUser = async (req, res) => {
  console.log(`Iniciando deleteUser para ID: ${req.params.id}`);
  try {
    // Verifica que el solicitante sea administrador
    if (req.userRole !== 'admin') {
      console.log('Acceso denegado: Usuario no admin intentando eliminar');
      return res.status(403).json({
        success: false,
        message: 'Solo administradores pueden eliminar usuarios'
      });
    }

    // Previene que un admin se elimine a sí mismo
    if (req.userId === req.params.id) {
      console.log('Intento de auto-eliminación - denegado');
      return res.status(400).json({
        success: false,
        message: 'No puedes eliminarte a ti mismo'
      });
    }

    console.log('Eliminando usuario de la base de datos');
    // Busca y elimina el usuario
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    
    if (!deletedUser) {
      console.log('Usuario no encontrado para eliminar');
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    console.log('Usuario eliminado exitosamente:', deletedUser._id);
    res.status(200).json({
      success: true,
      message: 'Usuario eliminado correctamente'
    });
  } catch (error) {
    console.error('Error en deleteUser:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar usuario',
      error: error.message
    });
  } finally {
    console.log('Finalizando deleteUser');
  }
};