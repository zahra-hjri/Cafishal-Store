import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 w-2/3 md:w-1/3 text-rose-200 h-screen fixed z-10">
      <ul className="text-xs p-5">
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
  );
};

export default Navbar;
