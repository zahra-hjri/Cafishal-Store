import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 w-2/3 md:w-1/3 text-rose-300 h-screen fixed z-2">
      <ul className="text-xs p-4">
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
        <li className="py-2">
          <a href="">تخفیف</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
