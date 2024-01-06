import { IoMdContact } from "react-icons/io";
import { IoSearchCircle, IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = ({ isOpenMobileMenu, onOpenMobileMenu }) => {
  return (
    <div className="bg-black fixed md:top-20 w-full ">
      <ul className="flex text-rose-200 p-4 justify-evenly">
        {/* <img className="absolute -top-20" src="/Logo.png" alt="logo" /> */}
        <div className="flex gap-2">
          <IoSearchCircle className="text-2xl" />
          <IoMdContact className="text-2xl" />
        </div>
        <div className="flex">
          {isOpenMobileMenu ? (
            <>
              <IoCloseSharp onClick={onOpenMobileMenu} />
              <div className="">
                <li>شال تابستانه</li>
                <li>شال گرم</li>
                <li>شومیز</li>
                <li>کت</li>
                <li>مانتو</li>
              </div>
            </>
          ) : (
            <IoMenu className="text-2xl" onClick={onOpenMobileMenu} />
          )}
        </div>
      </ul>
      {/* <div className="flex">
      </div> */}
    </div>
  );
};

export default Navbar;
