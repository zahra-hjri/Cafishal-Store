import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState("");
  // const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (value) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), title: value },
      });
      setValue("");
    }
  };
  return (
    <div className="flex w-full px-20 mt-10 gap-5">
      <input
        className="bg-slate-200 rounded-lg w-[50%] px-5"
        type="text"
        placeholder="Add todo ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo} className="btn btn-success text-white">
        add todo
      </button>
    </div>
  );
};

export default AddTodo;
