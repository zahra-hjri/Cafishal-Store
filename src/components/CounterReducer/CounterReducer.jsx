import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};

const CounterReducer = () => {
  const [state, dispach] = useReducer(reducer, { count: 0 });
  return (
    <div className="w-full bg-green-200 rounded-lg h-24 p-5 flex justify-center items-center gap-5">
      <button
        className="btn btn-warning"
        onClick={() => dispach({ type: "decrement", payload: 5 })}
      >
        -
      </button>
      <p>Count:{state.count}</p>
      <button
        className="btn btn-info"
        onClick={() => dispach({ type: "increment", payload: 6 })}
      >
        +
      </button>
    </div>
  );
};

export default CounterReducer;
