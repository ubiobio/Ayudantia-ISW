const Task = require('../models/taskModel');

// Controlador para obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al obtener las tareas' });
  }
};

// Controlador para obtener una tarea
exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, error: 'Tarea no encontrada' });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al obtener la tarea' });
  }
};

// Controlador para crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error al crear la tarea' });
  }
};

// Controlador para actualizar una tarea existente
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedTask });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al actualizar la tarea' });
  }
};

// Controlador para eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: 'Error al eliminar la tarea' });
  }
};
