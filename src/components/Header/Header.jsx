import { useContext } from "react";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <header
      className={`flex w-full ${
        darkMode ? "bg-gray-900 text-white" : ""
      } items-center justify-between  px-20 pt-10`}
    >
      <button onClick={handleTheme}>
        {darkMode ? (
          <BsSun className="text-3xl font-bold" />
        ) : (
          <FaMoon className="text-3xl font-bold" />
        )}
      </button>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-4 flex gap-6 font-bold">
          <li className=" ">خانه</li>
          <li className=" ">درباره ما</li>
          <li className=" ">تماس با ما</li>
          <li className=" ">رضایت</li>
          <li className=" ">توجه</li>
          <li className=" ">آف فصل</li>
          <li className=" ">برندینگ</li>
        </ul>
      </nav>
      {/* <FaBars className="text-2xl md:text-2xl  " /> */}
    </header>
  );
};

export default Header;
