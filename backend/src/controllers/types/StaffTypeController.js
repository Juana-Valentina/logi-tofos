// C:\Users\Juana\OneDrive\Documentos\logi-tofos\backend\src\controllers\types\StaffTypeController.js
const StaffType = require('../../models/types/StaffType');
const User = require('../../models/main/User');

console.log('Controlador de StaffType inicializado');

/**
 * Controlador para tipos de personal con permisos por rol:
 * - Admin: CRUD completo
 * - Coordinador: Lectura + edición limitada (solo descripción)
 * - Líder: Solo lectura de tipos asignados a su equipo
 */
module.exports = {
    // ----------------------------------------
    // Obtener todos los tipos (Líder+)
    // ----------------------------------------
    async getAll(req, res) {
        console.log('Ejecutando getAll - Listado de tipos de personal');
        try {
            const { role } = req.user;
            console.log(`Solicitud recibida de usuario con rol: ${role}`);

            // Filtro base: solo tipos activos
            let filter = { isActive: true };
            
            // Filtro adicional para Líder: solo tipos asignados a su equipo
            if (role === 'Líder') {
                console.log('Aplicando filtro para Líder...');
                const staffInEvents = await User.find(
                    { leaderId: req.user._id },
                    { staffTypeId: 1 }
                ).distinct('staffTypeId');
                
                console.log(`Tipos encontrados en su equipo: ${staffInEvents.length}`);
                filter._id = { $in: staffInEvents };
            }

            const staffTypes = await StaffType.find(filter);
            console.log(`Tipos de personal encontrados: ${staffTypes.length}`);

            res.json({
                success: true,
                data: staffTypes
            });

        } catch (error) {
            console.error('[StaffType] Error en getAll:', error.message);
            console.error(error.stack);
            res.status(500).json({
                success: false,
                message: 'Error al obtener tipos de personal',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    },

    // ----------------------------------------
    // Crear tipo (Admin)
    // ----------------------------------------
    async create(req, res) {
        console.log('Ejecutando create - Crear nuevo tipo de personal');
        try {
            const { name, description, requiredCertifications } = req.body;
            console.log('Datos recibidos:', { name, description, requiredCertifications });

            // Validación básica y saneamiento
            const safeName = typeof name === 'string' ? name.trim().slice(0, 100) : '';
            if (!safeName) {
                console.warn('Intento de creación sin nombre o nombre inválido');
                return res.status(400).json({
                    success: false,
                    message: 'El nombre es obligatorio y debe ser una cadena válida (máx 100 caracteres)'
                });
            }

            const safeDescription = typeof description === 'string' ? description.trim().slice(0, 1000) : undefined;

            // requiredCertifications: asegurarnos de que sea un array de strings saneados
            let safeCerts = [];
            if (Array.isArray(requiredCertifications)) {
                safeCerts = requiredCertifications
                    .filter(rc => rc != null)
                    .map(rc => (typeof rc === 'string' ? rc.trim().slice(0, 200) : ''))
                    .filter(s => s.length > 0);
                // Limitar número de certificaciones razonable
                if (safeCerts.length > 20) safeCerts = safeCerts.slice(0, 20);
            }

            // Construir payload seguro (whitelist)
            const payload = {
                name: safeName,
                createdBy: req.user._id
            };
            if (typeof safeDescription !== 'undefined') payload.description = safeDescription;
            if (safeCerts.length > 0) payload.requiredCertifications = safeCerts;

            const newStaffType = await StaffType.create(payload);

            console.log(`Nuevo tipo creado con ID: ${newStaffType._id}`);
            res.status(201).json({
                success: true,
                data: newStaffType
            });

        } catch (error) {
            console.error('[StaffType] Error en create:', error.message);
            
            if (error.code === 11000) {
                console.warn('Intento de crear tipo con nombre duplicado');
                res.status(400).json({
                    success: false,
                    message: 'Ya existe un tipo con ese nombre'
                });
            } else {
                console.error('Error interno:', error.stack);
                res.status(500).json({
                    success: false,
                    message: 'Error al crear tipo de personal',
                    error: process.env.NODE_ENV === 'development' ? error.message : undefined
                });
            }
        }
    },

    // ----------------------------------------
    // Actualizar tipo (Admin + Coordinador)
    // ----------------------------------------
    async update(req, res) {
        console.log(`Ejecutando update - Actualizando tipo ID: ${req.params.id}`);
        try {
            const { id } = req.params;
            const { role } = req.user;
            const updates = req.body;
            
            console.log(`Usuario rol: ${role}, Actualizaciones solicitadas:`, updates);

            // Validación para Coordinador (solo puede editar descripción)
            if (role === 'Coordinador' && 
                (updates.name || updates.requiredCertifications)) {
                console.warn('Coordinador intentó modificar campos restringidos');
                return res.status(403).json({
                    success: false,
                    message: 'Solo administradores pueden modificar nombre o certificaciones'
                });
            }

            const updatedStaffType = await StaffType.findByIdAndUpdate(
                id, 
                updates, 
                { new: true, runValidators: true }
            );

            if (!updatedStaffType) {
                console.warn(`Tipo no encontrado ID: ${id}`);
                return res.status(404).json({
                    success: false,
                    message: 'Tipo de personal no encontrado'
                });
            }

            console.log(`Tipo actualizado correctamente ID: ${id}`);
            res.json({
                success: true,
                data: updatedStaffType
            });

        } catch (error) {
            console.error('[StaffType] Error en update:', error.message);
            console.error(error.stack);
            res.status(500).json({
                success: false,
                message: 'Error al actualizar tipo de personal',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    },

    // ----------------------------------------
    // Eliminación lógica (Admin)
    // ----------------------------------------
    async delete(req, res) {
        console.log(`Ejecutando delete - Desactivando tipo ID: ${req.params.id}`);
        try {
            const staffType = await StaffType.findById(req.params.id);
            
            if (!staffType) {
                console.warn(`Tipo no encontrado para eliminar ID: ${req.params.id}`);
                return res.status(404).json({
                    success: false,
                    message: 'Tipo de personal no encontrado'
                });
            }

            // Verificar si hay usuarios activos asignados
            console.log('Verificando usuarios asignados...');
            const usersAssigned = await User.countDocuments({ 
                staffTypeId: staffType._id,
                status: 'active'
            });

            if (usersAssigned > 0) {
                console.warn(`Intento de eliminar tipo con ${usersAssigned} usuarios asignados`);
                return res.status(400).json({
                    success: false,
                    message: 'No se puede eliminar: hay personal activo asignado',
                    usersAssigned
                });
            }

            // Eliminación lógica (desactivación)
            staffType.isActive = false;
            await staffType.save();
            console.log(`Tipo desactivado correctamente ID: ${staffType._id}`);

            res.json({
                success: true,
                message: 'Tipo de personal desactivado'
            });

        } catch (error) {
            console.error('[StaffType] Error en delete:', error.message);
            console.error(error.stack);
            res.status(500).json({
                success: false,
                message: 'Error al eliminar tipo de personal',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    },

    // ----------------------------------------
    // Obtener personal por tipo (Líder+)
    // ----------------------------------------
    async getStaffByType(req, res) {
        console.log(`Ejecutando getStaffByType - Para tipo ID: ${req.params.id}`);
        try {
            const staff = await User.find({
                staffTypeId: req.params.id,
                status: 'active'
            }).select('name email phone');

            console.log(`Personal encontrado: ${staff.length}`);
            res.json({
                success: true,
                data: staff
            });

        } catch (error) {
            console.error('[StaffType] Error en getStaffByType:', error.message);
            console.error(error.stack);
            res.status(500).json({
                success: false,
                message: 'Error al obtener personal',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
};