import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count + 1 };
    }
    default:
      return state;
  }
};
const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="flex gap-5 items-center bg-green-300 rounded-lg p-5">
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "increment" })}
      >
        -
      </button>
      <p>count:{state.count}</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "decrement" })}
      >
        +
      </button>
    </div>
  );
};

export default CounterReducer;
