import { useEffect, useState } from "react";

const useStorageState = (key, initialState) => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, searchValue);
  }, [searchValue, key]);

  return [searchValue, setSearchValue];
};

export default useStorageState;
