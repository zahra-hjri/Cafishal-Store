import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/context";
import Products from "./components/Products";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen  ${darkMode ? "bg-gray-900" : ""}`}>
      <Header />
      <Products />
    </div>
  );
};
export default App;
