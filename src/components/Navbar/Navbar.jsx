import { IoMdContact } from "react-icons/io";
import { IoSearchCircle } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ isOpenMobileMenu, onOpenMobileMenu }) => {
  return (
    <div className="bg-black fixed top-20 w-2/3 md:w-full ">
      <ul className="flex-col md:flex text-rose-200 p-4 justify-evenly">
        <IoSearchCircle className="text-2xl" />
        <IoMdContact className="text-2xl" />
        <div className="flex">
          {isOpenMobileMenu ? (
            <div className="">
              <li>شال تابستانه</li>
              <li>شال گرم</li>
              <li>شومیز</li>
              <li>کت</li>
              <li>مانتو</li>
            </div>
          ) : (
            <IoMenu onClick={onOpenMobileMenu} />
          )}
        </div>
      </ul>
      {/* <div className="flex">
      </div> */}
    </div>
  );
};

export default Navbar;
