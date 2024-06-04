// import { Provider } from "react-redux";
import "./App.css";
import "./index.css";
// import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
// import store from "/src/Store.js";

// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    // <Provider>
    <div className="bg-gray-900 w-full h-screen">
      {/* <Header /> */}
      {/* <Navbar /> */}

      <Login />
    </div>
    // </Provider>
  );
};

export default App;
