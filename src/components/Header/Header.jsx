import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-gray-950">
      <a href="/">
        <GiAmpleDress className="text-4xl md:text-5xl" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-5 flex gap-6 font-bold ">
          <li className="py-1 text-white">خانه</li>
          <li className="py-1">درباره ما</li>
          <li className="py-1">
            تماس با ما
          </li>
          <li className="py-1">
            رضایت
          </li>
          <li className="py-1">
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
