const List = ({ filterData, handleDeletedItem }) => {
  return (
    <ul className="pt-10 menu w-56">
      {filterData.map((item) => (
        <li className="active " key={item.id}>
          <div className="flex gap-10 rounded-lg justify-between">
            <a className=""> {item.title}</a>
            <div className="badge badge-accent text-[8px] pt-0.5">
              {item.point}
            </div>
            <button
              onClick={() => handleDeletedItem(item.id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
