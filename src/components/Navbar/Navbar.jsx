import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-2/3 md:w-3/4 text-rose-300 h-screen fixed z-20">
      <ul className="text-xs p-5 flex justify-between">
        <li className="py-2 text-white text-xs">
          خانه
        </li>
        <li className="py-2 text-white text-xs">
          درباره ما
        </li>
        <li className="py-2 text-white text-xs">
          تماس با ما
        </li>
        <li className="py-2 text-white text-xs">
          <a href="">رضایت</a>
        </li>
        <li className="py-2 text-white text-xs">
          <a href="">توجه</a>
        </li>
        <li className="py-2 text-white">
          <a href="">برندینگ</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
