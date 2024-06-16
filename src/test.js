const action = {
  type: "decrease",
  payload: 53,
};

const counterReducer = (state, action) => {
  if (action.type === "increase") {
    return { ...state, count: state + action.payload };
  }
  if (action.type === "decrease") {
    return { ...state, count: state - action.payload };
  }
  return state;
};
const result = counterReducer(25, action);
console.log(result);
