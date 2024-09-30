const List = ({ filterData }) => {
  return (
    <ul className="pt-10 menu w-56">
      {filterData.map((item) => (
        <li className="active " key={item.id}>
          <div className="flex gap-5 rounded-lg justify-between">
            <a className=""> {item.title}</a>
            <div className="badge badge-accent text-[8px] pt-0.5">
              {item.point}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
