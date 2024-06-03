import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center text-white">
      <a href="/">
        <GiAmpleDress className="text-lg md:text-xl mx-5" />
      </a>
      <nav>
        <ul className="text-sm md:text-md lg:text-lg p-3 flex gap-6 font-normal">
          <li className="py-2 text-white text-xs font-bold">خانه</li>
          <li className="py-2 text-white text-xs font-bold">درباره ما</li>
          <li className="py-2 text-white text-xs font-bold">
            تماس با ما
          </li>
          <li className="py-2 text-sm text-white mx-5 font-bold">
            رضایت
          </li>
          <li className="py-2 text-xs text-white mx-5 font-bold">
            توجه
          </li>
          <li className="py-2 text-xs text-white mx-5 font-bold">
            آف فصل
          </li>
          <li className="py-2 text-xs text-white mx-5 font-bold">
            برندینگ
          </li>
        </ul>
      </nav>
      <FaBars className="text-xl md:text-2xl text-white " />
    </header>
  );
};

export default Header;
