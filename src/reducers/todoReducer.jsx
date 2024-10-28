// reducers/todoReducer.js

export const initialState = {
  todos: [
    { id: 1, title: "clean room" },
    { id: 2, title: "study english" },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
