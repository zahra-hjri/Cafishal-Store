import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <a href="/">
        <GiAmpleDress className="text-4xl" />
      </a>
      <FaBars className="text-2xl" />
    </div>
  );
};

export default Header;
