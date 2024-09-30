import store from "./redux/store";
import { Provider } from "react-redux";
// import Counter from "./components/Counter/Counter";
import "./App.css";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import { useState } from "react";
import useStorageState from "./hooks/useStorageState";

const text = "React";
const App = () => {
  const frameworkData = [
    { id: 1, title: "React", point: 100 },
    { id: 2, title: "Laravel", point: 80 },
    { id: 3, title: "Redux", point: 40 },
    { id: 4, title: "Vue", point: 70 },
    { id: 5, title: "Angular", point: 50 },
  ];
  const [searchValue, setSearchValue] = useStorageState("search", "");

  const [filterData, setFilterData] = useState(frameworkData);
  const handleFilter = (e) => {
    setSearchValue(e.target.value);
    const filtered = frameworkData.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    setFilterData(filtered);
  };

  return (
    <Provider store={store}>
      <div className="w-full h-screen bg-blue-100 font-bold px-28 pt-20">
        <h1 className="text-3xl">Hi {text}</h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleFilter={handleFilter}
        />
        <List filterData={filterData} />
        {/* <Counter></Counter> */}
      </div>
    </Provider>
  );
};

export default App;
