import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.hasOwnProperty("todos") === false) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localData = JSON.parse(localStorage.getItem("todos"));
      setTodos(localData);
      // setTodos(localData);
    }
  };
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
