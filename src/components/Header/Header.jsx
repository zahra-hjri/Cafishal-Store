import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-center text-gray-900 my-2">
      <a href="/">
        <GiAmpleDress className="text-lg md:text-xl" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-3 flex gap-4 font-normal">
          <li className="py-2 text-white text-xs">خانه</li>
          <li className="py-2 text-white text-xs">درباره ما</li>
          <li className="py-2 text-white text-xs">
            تماس با ما
          </li>
          <li className="py-2 text-gray-500 text-xs">
            رضایت
          </li>
          <li className="py-2 text-gray-400 text-xs">
            توجه
          </li>
          <li className="py-2 text-gray-400">
            آف فصل
          </li>
          <li className="py-1 text-gray-400">
            برندینگ
          </li>
        </ul>
      </nav>
      <FaBars className="text-xl md:text-3xl " />
    </header>
  );
};

export default Header;
