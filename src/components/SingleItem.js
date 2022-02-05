const SingleItem = ({
  title,
  description,
  date,
  key,
  completed,
  setTodos,
  todo,
  todos,
}) => {
  const deleteHandler = () => {
    setTodos(
      todos.filter((item) => {
        return item.id !== todo.id;
      })
    );
  };

  const completedHandler = () => {
    console.log(todo);
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div
      className="flex justify-center items-center mb-1 py-12 px-4 sm:px-6 lg:px-8"
      key={key}
    >
      <div className="flex flex-col bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 p-4 rounded-xl text-white w-10/12 mx-auto my-auto">
        <div>
          <span
            className={
              completed
                ? "text-2xl font-bold line-through"
                : "text-2xl font-bold"
            }
          >
            {title}
          </span>
        </div>
        <div>
          <p
            className={
              completed
                ? "text-xl  mt-3 mb-5 line-through"
                : "text-xl  mt-3 mb-5"
            }
          >
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between text-gray-800">
          <p tabindex="0" className="focus:outline-none text-sm text-white">
            {date}
          </p>
          <div className="flex flex-row space-x-2">
            <div
              className="w-8 h-8 rounded-full bg-white text-dark-100 flex items-center justify-center"
              onClick={completedHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div
              className="w-8 h-8 rounded-full bg-white text-dark-100 flex items-center justify-center"
              onClick={deleteHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
