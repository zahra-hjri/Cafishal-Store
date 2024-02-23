import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 w-2/3 md:w-1/3 text-rose-400 h-screen fixed z-10">
      <ul className="text-xs p-5 flex justify-between">
        <li className="py-2">
          خانه
        </li>
        <li className="py-2">
          درباره ما
        </li>
        <li className="py-2">
          تماس با ما
        </li>
        <li className="py-2">
          <a href="">رضایت</a>
        </li>
        <li className="py-2">
          <a href="">توجه</a>
        </li>
        <li className="py-2">
          <a href="">برندینگ</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
