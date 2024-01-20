import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-slate-950 w-2/3 text-rose-200 h-full">
      <ul className="text-xs p-5">
        <li className="py-1 cursor-pointer">خانه</li>
        <li className="py-1 cursor-pointer">درباره ما</li>
        <li className="py-1 cursor-pointer">تماس با ما</li>
        <li className="py-1 cursor-pointer">رضایت </li>
      </ul>
    </div>
  );
};

export default Navbar;
