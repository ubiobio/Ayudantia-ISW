import Link from 'next/link';

const TasksForm = ({ task, setTask, handleSubmit }) => {
  const { title, description } = task;
  return (
    <form onSubmit={handleSubmit} className="max-w-sm ">
      <div className="mb-4">
        <label htmlFor="title" className="block  text-sm font-bold mb-2">
          Título
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 font-bold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block  text-sm font-bold mb-2">
          Descripción
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 font-bold px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar!
        </button>
        <Link href="/tasks">
          <button className="inline-block hover:bg-red-500 bg-red-700 text-white font-bold py-2 px-4 rounded">
            Atras
          </button>
        </Link>
      </div>
    </form>
  );
};

export default TasksForm;
