import "./App.css";
import "./index.css";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  function handleOpenMobileMenu() {
    setIsOpenMobileMenu((open) => !open);
  }
  return (
    <div className="bg-rose-200 min-h-screen">
      <Logo />
      <Navbar
        isOpenMobileMenu={isOpenMobileMenu}
        onOpenMobileMenu={handleOpenMobileMenu}
      />
    </div>
  );
}

export default App;
