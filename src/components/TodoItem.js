import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import Empty from "./Empty";
import SingleItem from "./SingleItem";

const TodoItem = () => {
  const [todos, setTodos] = useContext(TodoContext);
  if (todos.length <= 0) {
    return <Empty />;
  } else {
    return (
      <>
        {todos.map((todo) => {
          return (
            <SingleItem
              title={todo.title}
              description={todo.description}
              date={todo.date}
              key={todo.id}
              completed={todo.completed}
              setTodos={setTodos}
              todo={todo}
              todos={todos}
            />
          );
        })}
      </>
    );
  }
};

export default TodoItem;
