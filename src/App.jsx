import store from "./redux/store";
import { Provider } from "react-redux";
// import Counter from "./components/Counter/Counter";
import "./App.css";
import Search from "./components/Search/Search";
import List from "./components/List/List";

const title = "React";
const App = () => {
  const frameworkData = [
    { name: "React", point: 100 },
    { name: "Vue", point: 70 },
    { name: "Angular", point: 50 },
  ];
  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-blue-100 font-bold px-28 pt-20">
        <h1 className="text-3xl">Hi {title}</h1>
        <Search />
        <List frameworkData={frameworkData} />
        {/* <Counter></Counter> */}
      </div>
    </Provider>
  );
};

export default App;
