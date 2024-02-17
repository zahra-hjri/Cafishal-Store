import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-gray-950">
      <a href="/">
        <GiAmpleDress className="text-3xl md:text-2xl" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-md p-4 flex gap-6 font-bold ">
          <li className="py-1 text-white">خانه</li>
          <li className="py-1 text-white">درباره ما</li>
          <li className="py-1 text-gray-400">
            تماس با ما
          </li>
          <li className="py-1">
            رضایت
          </li>
          <li className="py-1">
            توجه
          </li>
          <li className="py-2">
            آف فصل
          </li>
          <li className="py-2">
            برندینگ
          </li>
        </ul>
      </nav>
      <FaBars className="text-2xl md:text-3xl " />
    </header>
  );
};

export default Header;
