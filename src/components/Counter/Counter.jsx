import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleBtnInc = () => {
    dispatch(increment());
    console.log(count);
  };
  return (
    <div className="w-[50%] mx-auto">
      <h1>count:{count}</h1>
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
