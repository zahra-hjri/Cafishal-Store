import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <ul className="px-20 w-full">
      {state.todos.map((todo) => (
        <li
          key={todo.id}
          className="text-black bg-blue-100 flex gap-10 mt-2 w-[50%] h-10 rounded-lg px-5 items-center justify-between"
        >
          {todo.title}
          <button
            className="bg-red-400 text-white px-3 rounded-lg h-7 flex items-center"
            onClick={() => handleRemoveTodo(todo.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
