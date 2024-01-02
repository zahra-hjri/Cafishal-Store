import "./App.css";
import "./index.css";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-rose-200 min-h-screen">
      <Logo />
      <Navbar />
    </div>
  );
}

export default App;
