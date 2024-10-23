import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./components/context";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen ${darkMode ? "bg-gray-900" : ""}`}>
      <Header />
    </div>
  );
};
export default App;
