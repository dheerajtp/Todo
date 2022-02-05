import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const Create = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      date: new Date().toLocaleString(),
      completed: false,
      id: todos.length + 1,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos((prevTodo) => [...prevTodo, todo]);
    setTodo({
      ...todo,
      id: "",
      title: "",
      description: "",
    });
    console.log(todos);
  };
  return (
    <form onSubmit={submitHandler}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-1">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Todo ✒️
            </h1>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                Todo Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={todo.title}
                onChange={handleChange}
                autoComplete="off"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-9 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={todo.description}
                onChange={handleChange}
                autoComplete="off"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-9 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="m-auto text-white bg-indigo-500 border-0 py-2 sm:content-center  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Create
            </button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Create;
