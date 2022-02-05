import Create from "./components/Create";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <Create />
        <TodoItem />
      </TodoProvider>
    </>
  );
}

export default App;
