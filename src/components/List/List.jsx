const List = ({ stories }) => {
  return (
    <div>
      <ul className="w-2/3 mx-auto pt-10">
        {stories.map((item) => (
          <li key={item.id} className="text-white">
            <span className="px-2">{item.title}</span>
            <span className="px-2">{item.frameWork}</span>
            <span className="text-pink-400 px-2">{item.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
