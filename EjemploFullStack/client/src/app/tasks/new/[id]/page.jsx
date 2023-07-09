// import NewTask from '@/app/tasks/new/page';
// export default NewTask;

'use client';
import { useEffect, useState } from 'react';
import TasksForm from '../../TaskForm';
import { useParams, useRouter } from 'next/navigation';
import { updateTask, getTask } from '@/data/tasksData';

const EditTask = () => {
  const params = useParams();

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    getTask(params.id).then((res) => {
      if (res.success) {
        setTask(res.data);
      }
    });
  }, []);

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTask(params.id, task);
      push('/tasks');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TasksForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
  );
};

export default EditTask;
