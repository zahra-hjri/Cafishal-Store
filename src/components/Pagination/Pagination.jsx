import _ from "lodash";
const Pagination = ({ pages, setPage, page }) => {
  return (
    <div className=" flex justify-center mt-10">
      <ul className="flex justify-evenly w-80 rtl">
        <li className=" border-blue-600 text-blue-600 border-[1px] rounded-full  w-10 h-10 flex justify-center items-center text-[9px]">
          قبلی
        </li>
        {_.times(pages, (index) => (
          <li className=" border-blue-600 text-blue-600 border-[1px] rounded-full  w-10 h-10 flex justify-center items-center">
            {pages - index}
          </li>
        ))}
        <li className=" border-blue-600 border-[1px] rounded-full  w-10 h-10 flex justify-center items-center text-[9px] text-blue-600">
          بعدی
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
