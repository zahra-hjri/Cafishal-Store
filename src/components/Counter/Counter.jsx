import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions";
import { decrement } from "../../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleBtnInc = () => {
    dispatch(increment());
    console.log(count);
  };
  const handleBtnDec = () => {
    dispatch(decrement());
    console.log(count);
  };
  return (
    <div className="w-[50%] mx-auto flex gap-5 p-8 items-center justify-center">
      <button
        onClick={handleBtnDec}
        className="bg-red-600 text-white rounded-lg flex justify-center items-center w-24 h-14"
      >
        decrement
      </button>
      <span className="font-bold text-lg">count:{count}</span>
      <button
        onClick={handleBtnInc}
        className="bg-green-600 text-white rounded-lg flex justify-center items-center w-24 h-14"
      >
        increment
      </button>
    </div>
  );
};
export default Counter;
