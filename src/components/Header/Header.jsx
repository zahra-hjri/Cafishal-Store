import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-gray-950">
      <a href="/">
        <GiAmpleDress className="text-4xl md:text-5xl" />
      </a>
      <nav className="">
        <ul className="text-xs p-5 flex">
          <li className="py-1">
            <a href="">خانه</a>
          </li>
          <li className="py-1">
            <a href="">درباره ما</a>
          </li>
          <li className="py-1">
            <a href="">تماس با ما</a>
          </li>
          <li className="py-1">
            <a href="">رضایت</a>
          </li>
          <li className="py-1">
            <a href="">توجه</a>
          </li>
          <li className="py-1">
            <a href="">برندینگ</a>
          </li>
        </ul>
      </nav>
      <FaBars className="text-2xl md:text-3xl " />
    </header>
  );
};

export default Header;
