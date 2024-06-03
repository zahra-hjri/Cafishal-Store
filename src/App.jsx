import "./App.css";
import "./index.css";
// import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { Provider } from "react-redux";

// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-gray-900 w-full h-screen">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Provider>
        <Login />
      </Provider>
    </div>
  );
};

export default App;
