const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Ruta para obtener todas las tareas
router.get('/tasks', taskController.getTasks);

// Ruta para obtener una tarea
router.get('/tasks/:id', taskController.getTask);

// Ruta para crear una nueva tarea
router.post('/tasks', taskController.createTask);

// Ruta para actualizar una tarea existente
router.put('/tasks/:id', taskController.updateTask);

// Ruta para eliminar una tarea
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
