import "./App.css";
import "./index.css";
// import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  function handleOpenMobileMenu() {
    setIsOpenMobileMenu((open) => !open);
  }
  return (
    <div className="bg-rose-200 min-h-screen">
      {/* <Logo /> */}
      <Navbar
        isOpenMobileMenu={isOpenMobileMenu}
        onOpenMobileMenu={handleOpenMobileMenu}
      />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
