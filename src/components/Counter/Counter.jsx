import { useSelector, useDispatch } from "react-redux";
import { incremented } from "../../redux/reducer";
import { decremented } from "../../redux/reducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleBtnInc = () => {
    dispatch(incremented());
  };
  const handleBtnDec = () => {
    dispatch(decremented());
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
