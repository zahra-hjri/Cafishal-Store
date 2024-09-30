import store from "./redux/store";
import { Provider } from "react-redux";
// import Counter from "./components/Counter/Counter";
import "./App.css";
import Search from "./components/Search/Search";
import List from "./components/List/List";

const text = "React";
const App = () => {
  const frameworkData = [
    { id: 1, title: "React", point: 100 },
    { id: 2, title: "Laravel", point: 80 },
    { id: 3, title: "Redux", point: 40 },
    { id: 4, title: "Vue", point: 70 },
    { id: 5, title: "Angular", point: 50 },
  ];
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-blue-100 font-bold px-28 pt-20">
        <h1 className="text-3xl">Hi {text}</h1>
        <Search />
        <List frameworkData={frameworkData} />
        {/* <Counter></Counter> */}
      </div>
    </Provider>
  );
};

export default App;
