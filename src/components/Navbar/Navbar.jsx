import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 w-2/3 md:w-1/3 text-rose-300 h-screen fixed z-20">
      <ul className="text-xs p-5 flex justify-between">
        <li className="py-3">
          خانه
        </li>
        <li className="py-3 text-white">
          درباره ما
        </li>
        <li className="py-2 text-white">
          تماس با ما
        </li>
        <li className="py-2 text-white">
          <a href="">رضایت</a>
        </li>
        <li className="py-2 text-white">
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
