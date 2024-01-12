import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
// import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [products, setProducts] = useState([]);
  function handleOpenMobileMenu() {
    setIsOpenMobileMenu((open) => !open);
  }

  useEffect(() => {
    const sendRequestData = async () => {
      const response = await fetch("http://localhost:8000/products");
      const responseData = await response.json();
      setProducts(responseData);
    };
    sendRequestData();
  }, []);
  return (
    <div className="bg-rose-200 min-h-screen">
      {/* <Logo /> */}
      <Navbar
        isOpenMobileMenu={isOpenMobileMenu}
        onOpenMobileMenu={handleOpenMobileMenu}
      />
      <Products products={products} />
      <Footer />
    </div>
  );
}

export default App;
