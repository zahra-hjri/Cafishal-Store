import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-3 text-gray-950 my-1">
      <a href="/">
        <GiAmpleDress className="text-lg md:text-xl" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-4 flex gap-4 font-bold ">
          <li className="py-2 text-white text-xs">خانه</li>
          <li className="py-1 text-white text-xs">درباره ما</li>
          <li className="py-1 text-white text-xs">
            تماس با ما
          </li>
          <li className="py-1 text-gray-400">
            رضایت
          </li>
          <li className="py-1 text-gray-400">
            توجه
          </li>
          <li className="py-1">
            آف فصل
          </li>
          <li className="py-1">
            برندینگ
          </li>
        </ul>
      </nav>
      <FaBars className="text-2xl md:text-3xl " />
    </header>
  );
};

export default Header;
