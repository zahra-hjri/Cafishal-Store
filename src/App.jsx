import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const initialStories = [
    { id: 1, name: "React", points: 52 },
    { id: 2, name: "Redux", points: 21 },
    { id: 3, name: "Java", points: 14 },
  ];

  const [stories, setStories] = useState(initialStories);
  const getAsynchronous = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } });
      }, 2000);
    });
  };
  // useEffect(() => {
  //   getAsynchronous().then((result) => {
  //     setStories(result.data.stories);
  //   });
  // }, []);
  return (
    <div className="bg-gray-900 h-screen text-white font-semibold">
      {stories.map((item) => {
        <div>{item.id}</div>;
      })}
    </div>
  );
};

export default App;
