// import NewTask from '@/app/tasks/new/page';
// export default NewTask;

'use client';
import { useState } from 'react';
import TasksForm from '../TaskForm';
import { useParams, useRouter } from 'next/navigation';
import { createTask } from '@/data/tasksData';

const NewTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const params = useParams();
  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(params);
    try {
      await createTask(task);
      push('/tasks');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TasksForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
  );
};

export default NewTask;
