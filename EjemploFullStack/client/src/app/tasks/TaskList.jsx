'use client';
import { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '@/data/tasksData';
import { useRouter } from 'next/navigation';

const EditButton = ({ id }) => {
  const { push } = useRouter();
  return (
    <button
      onClick={() => push(`/tasks/new/${id}`)}
      className="m-1 inline-block hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Editar
    </button>
  );
};

const DeleteButton = ({ id, onTaskDeleted }) => {
  const { push } = useRouter();
  const handleDelete = async () => {
    try {
      await deleteTask(id);
      onTaskDeleted();
      push('/tasks');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="m-1 inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Eliminar
    </button>
  );
};

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDeleted, setTaskDeleted] = useState(false);

  const handleTaskDeleted = () => {
    setTaskDeleted(!taskDeleted); // Invierte el valor de taskDeleted para desencadenar el efecto
  };

  useEffect(() => {
    getTasks().then((res) => {
      if (res.success) {
        setTasks(res.data);
        console.log(res.data);
      }
    });
  }, [taskDeleted]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks?.map((task) => (
            <li key={task._id}>
              <h2 className="text-lg font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <EditButton
                id={task._id}
                title={task.title}
                description={task.description}
              />
              <DeleteButton id={task._id} onTaskDeleted={handleTaskDeleted} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};
