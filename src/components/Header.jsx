import Badge from "./Badge";
import "../styles/App.css";

const Header = () => {
  return (
    <div className="w-full h-[60px] text-white pt-5 flex justify-between bg-slate-600 px-20 ">
      <div>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      <Badge />
    </div>
  );
};

export default Header;
