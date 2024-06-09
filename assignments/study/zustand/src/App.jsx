import { useRef } from "react";
import useStore from "./zustand/useStore";

function App() {
  const todoRef = useRef(null);
  const { todos, addTodo, removeTodo, toggleTodo, clearCompleted } = useStore();

  const handleAddTodo = () => {
    addTodo(todoRef.current.value);
    todoRef.current.value = "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List</h1>
      <input type="text" ref={todoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default App;
