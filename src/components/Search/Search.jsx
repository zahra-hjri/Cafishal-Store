import { useEffect, useState } from "react";

const Serach = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(821);
      // reject("there is an erroe");
    }, 2000);
  });

  promise.then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );

  console.log(promise);
  // const [searchValue, setSearchValue] = useState("search");
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("search") || ""
  );
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    // localStorage.setItem("search", searchValue);
  };
  useEffect(() => {
    localStorage.setItem("search", searchValue);
  }, [searchValue]);
  return (
    <div className="w-2/3 mx-auto pt-10">
      <input value={searchValue} onChange={handleSearch} type="text" />
    </div>
  );
};
export default Serach;
