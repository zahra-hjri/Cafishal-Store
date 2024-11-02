import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/context";
import Products from "./components/Products";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import { ProductsProvider } from "./context/ProductsContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-screen  ${darkMode ? "bg-gray-900" : ""}`}>
      <ProductsProvider>
        <Header />
        <Products />
      </ProductsProvider>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
};
export default App;
