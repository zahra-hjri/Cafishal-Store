const List = ({ frameworkData }) => {
  return (
    <ul className="pt-10 menu w-56">
      {frameworkData.map((item) => (
        <li className="active " key={item.name}>
          <div className="flex gap-5 rounded-lg justify-between">
            <a className=""> {item.name}</a>
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
