const List = ({ frameworkData }) => {
  return (
    <ul className="pt-10 menu w-56">
      {frameworkData.map(({ id, ...frameworkDataWhithoutId }) => (
        <li className="active " key={id} {...frameworkDataWhithoutId}>
          <div className="flex gap-5 rounded-lg justify-between">
            <a className=""> {frameworkDataWhithoutId.title}</a>
            <div className="badge badge-accent text-[8px] pt-0.5">
              {frameworkDataWhithoutId.point}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
