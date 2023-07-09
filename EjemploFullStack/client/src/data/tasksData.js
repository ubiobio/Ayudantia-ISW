import axios from '@/data/apiRoot';

export const getTasks = async () => {
  try {
    const res = await axios.get('/tasks');
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const getTask = async (id) => {
  try {
    const res = await axios.get(`/tasks/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const createTask = async (task) => {
  try {
    const res = await axios.post('/tasks', task);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (id, task) => {
  try {
    const res = await axios.put(`/tasks/${id}`, task);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(`/tasks/${id}`);
    return res.status === 200 ? res.data : { success: false, data: [] };
  } catch (err) {
    console.log(err);
  }
};
