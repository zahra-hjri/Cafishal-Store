import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
// import { Provider } from "react-redux";
// import { store } from "./Store.js";
import ThemeProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
