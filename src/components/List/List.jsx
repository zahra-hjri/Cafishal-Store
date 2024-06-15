const List = ({ stories }) => {
  return (
    <div>
      <ul className="w-1/2 mx-auto pt-10">
        {stories.map((item) => (
          <li key={item.id} className="text-white">
            <span>{item.title}</span>
            <span className="text-pink-400 px-2">{item.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
