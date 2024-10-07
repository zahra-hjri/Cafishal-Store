import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 4 };
    case "decrement":
      return { count: state.count - 3 };
    default:
      state;
  }
};

const CounterReducer = () => {
  const [state, dispach] = useReducer(reducer, { count: 0 });
  return (
    <div className="flex gap-5 items-center">
      <button
        className="btn btn-warning"
        onClick={() => dispach({ type: "decrement" })}
      >
        -
      </button>
      <p>count:{state.count}</p>
      <button
        className="btn btn-success"
        onClick={() => dispach({ type: "increment" })}
      >
        +
      </button>
    </div>
  );
};

export default CounterReducer;
