import { FaBars } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <GiAmpleDress className="text-3xl" />
      <FaBars className="text-2xl" />
    </div>
  );
};

export default Header;
