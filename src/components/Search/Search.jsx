import { useEffect, useState } from "react";

const Serach = () => {
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
    <div>
      <input value={searchValue} onChange={handleSearch} type="text" />
    </div>
  );
};
export default Serach;
