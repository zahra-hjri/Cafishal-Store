import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/context";
import Products from "./components/Products";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen  ${darkMode ? "bg-gray-900" : ""}`}>
      <Header />
      <Products />
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
};
export default App;
