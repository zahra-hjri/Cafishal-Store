import "./App.css";
import "./index.css";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import { useState } from "react";
import Serach from "./components/Search/Search";

// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const stories = [
    { id: 1, title: "React", points: 25, frameWork: "React" },
    { id: 2, title: "Redux", points: 5, frameWork: "Redux" },
    { id: 3, title: "Zahra", points: 8, frameWork: "Redux" },
    { id: 4, title: "Mohammad", points: 12, frameWork: "Redux" },
    { id: 5, title: "JavaScript", points: 22, frameWork: "Redux" },
  ];
  const [seerchTerm, setSeerchTerm] = useState("");
  const filterdSearchTerm = stories.filter((item) =>
    item.title.includes(seerchTerm)
  );
  return (
    <div className="bg-gray-900 w-full h-screen">
      {/* <Header /> */}
      {/* <Navbar /> */}

      <Login seerchTerm={seerchTerm} setSeerchTerm={setSeerchTerm} />
      <List stories={filterdSearchTerm} />
      <Serach />
    </div>
  );
};

export default App;
