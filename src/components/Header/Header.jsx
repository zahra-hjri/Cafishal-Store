import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-center text-gray-900 my-2">
      <a href="/">
        <GiAmpleDress className="text-lg md:text-xl mx-4" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-4 flex gap-4 font-normal">
          <li className="py-2 text-white text-xs">خانه</li>
          <li className="py-2 text-white text-xs">درباره ما</li>
          <li className="py-2 text-white text-xs">
            تماس با ما
          </li>
          <li className="py-2 text-sm text-white mx-5">
            رضایت
          </li>
          <li className="py-2 text-xs text-white mx-4">
            توجه
          </li>
          <li className="py-2 text-xs text-white mx-5">
            آف فصل
          </li>
          <li className="py-1 text-xs text-white mx-5">
            برندینگ
          </li>
        </ul>
      </nav>
      <FaBars className="text-xl md:text-2xl text-white " />
    </header>
  );
};

export default Header;
