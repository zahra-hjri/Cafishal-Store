import { IoMdContact } from "react-icons/io";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-black fixed top-20 w-full">
      <ul className="flex text-rose-200 p-4 justify-evenly">
        <IoSearchCircle className="text-2xl" />
        <IoMdContact className="text-2xl" />
        <li>شال تابستانه</li>
        <li>شال گرم</li>
        <li>شومیز</li>
        <li>کت</li>
        <li>مانتو</li>
      </ul>
      {/* <div className="flex">
      </div> */}
    </div>
  );
};

export default Navbar;
