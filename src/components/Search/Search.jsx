const Search = ({ id, searchValue, handleFilter }) => {
  return (
    <div className="flex gap-2 mt-5 items-center">
      <label className="text-[15px]" htmlFor={id}>
        Search:
      </label>
      <input
        className="w-96 h-10 rounded-lg px-3"
        type="text"
        id={id}
        value={searchValue}
        onChange={handleFilter}
      ></input>
      <p className="text-green-700">{searchValue}</p>
    </div>
  );
};

export default Search;
