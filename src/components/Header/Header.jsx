import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5 text-gray-950">
      <a href="/">
        <GiAmpleDress className="text-4xl md:text-5xl" />
      </a>
      <FaBars className="text-2xl md:text-3xl " />
    </div>
  );
};

export default Header;
