import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions";
import { decrement } from "../../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleBtnInc = () => {
    dispatch(increment());
  };
  const handleBtnDec = () => {
    dispatch(decrement());
  };
  return (
    <div className="w-[50%] h-full mx-auto flex gap-5 p-8 items-center justify-center">
      <button
        onClick={handleBtnDec}
        className="bg-red-600 text-white rounded-lg flex justify-center items-center w-36 font-bold h-14 px-5"
      >
        DECREMENT
      </button>
      <span className="font-bold text-lg">count:{count}</span>
      <button
        onClick={handleBtnInc}
        className="bg-green-600 text-white rounded-lg flex justify-center items-center w-36 font-bold h-14 px-5"
      >
        INCREMENT
      </button>
    </div>
  );
};
export default Counter;
