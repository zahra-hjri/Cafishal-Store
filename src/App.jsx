import "./App.css";
import "./index.css";
import Login from "./components/Login/Login";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import Serach from "./components/Search/Search";
// import { data } from "autoprefixer";

// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const initialStories = [
    { id: 1, title: "React", points: 25, frameWork: "React" },
    { id: 2, title: "Redux", points: 5, frameWork: "Redux" },
    { id: 3, title: "Zahra", points: 8, frameWork: "Redux" },
    { id: 4, title: "Mohammad", points: 12, frameWork: "Redux" },
    { id: 5, title: "JavaScript", points: 22, frameWork: "Redux" },
  ];

  const [stories, setStories] = useState([]);
  const [seerchTerm, setSeerchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const filterdSearchTerm = stories.filter((item) =>
    item.title.includes(seerchTerm)
  );

  const getStories = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } });
      }, 2000);
    });
  };

  useEffect(() => {
    // setIsLoading(true);
    getStories()
      .then((result) => {
        setStories(result.data.stories);
      })
      .catch(() => setIsError(true));
    // setIsLoading(false);
  }, []);

  return (
    <div className="bg-gray-900 w-full h-screen ">
      {/* <Header /> */}
      {/* <Navbar /> */}

      <Login seerchTerm={seerchTerm} setSeerchTerm={setSeerchTerm} />
      {isLoading ? (
        <p className="bg-green-300 text-white">is loading data ..</p>
      ) : (
        <List stories={stories} />
      )}
      <Serach />
    </div>
  );
};

export default App;
