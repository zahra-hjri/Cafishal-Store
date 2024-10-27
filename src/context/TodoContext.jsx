import { createContext } from "react";
import todoReducer from "../reducers/todoReducer";
import { useReducer } from "react";

const initialState = {
  todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispach] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispach }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
