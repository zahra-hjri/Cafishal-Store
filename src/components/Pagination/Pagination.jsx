import _ from "lodash";
const Pagination = ({ pages, setPage, page }) => {
  const handlePage = (i) => {
    setPage(i + 1);
  };
  const handlePrevious = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };
  const handleNext = () => {
    setPage((newPage) => {
      let nextPage = newPage + 1;
      if (nextPage > pages) {
        nextPage = 1;
      }
      return nextPage;
    });
  };

  // const handlePrevios = () => {
  //   setPage((oldPage) => oldPage - 1);
  //   if (page < 1) {
  //     setPage(pages - 1);
  //   }
  // };
  return (
    <div className=" flex justify-center mt-10">
      <ul className="flex justify-evenly w-80 rtl">
        <li
          onClick={handlePrevious}
          className=" bg-gray-400 text-white cursor-pointer border-[1px] font-bold rounded-lg  w-10 h-10 flex justify-center items-center text-[9px]"
        >
          قبلی
        </li>
        {_.times(pages, (index) => (
          <li
            onClick={() => handlePage(index)}
            key={index}
            className={` border-orange-600  border-[1px] rounded-lg cursor-pointer font-bold  w-10 h-10 flex justify-center items-center ${
              page === index + 1
                ? "bg-orange-600 text-white"
                : "text-orange-400"
            }`}
          >
            {index + 1}
          </li>
        ))}
        <li
          onClick={handleNext}
          className=" bg-gray-400 border-[1px] rounded-lg cursor-pointer  w-10 h-10 flex font-bold justify-center items-center text-[9px] text-white"
        >
          بعدی
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
