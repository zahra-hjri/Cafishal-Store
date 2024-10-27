import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const [state, dispach] = useContext(TodoContext);
  const handleDeleteTodo = (title) => {
    dispach({ type: "DELETE_TODO", payload: title });
  };
  return (
    <ul className="bg-gray-200 rounded-lg w-[50%] px-20 mt-10 mx-auto">
      {state.todos.map((todo) => (
        <li key={todo.title}>
          <span>{todo.title}</span>
          <button onClick={() => handleDeleteTodo(todo.title)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
