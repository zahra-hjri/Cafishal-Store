import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increament, decreament } from "../redux/calculatorSlice";

const TodoList = () => {
  const num = useSelector((state) => state.number);
  const dispach = useDispatch();
  return (
    <div className="flex w-full h-screen justify-center items-center gap-5">
      <button
        onClick={() => dispach(increament(1))}
        className="btn-success w-[120px] h-[40px] rounded-lg"
      >
        +
      </button>
      {num}
      <button
        onClick={() => dispach(decreament(4))}
        className="btn-warning w-[120px] h-[40px] rounded-lg"
      >
        -
      </button>
    </div>
  );
};

export default TodoList;
