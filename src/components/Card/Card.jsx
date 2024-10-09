const Card = ({ programer }) => {
  return (
    <div className="w-96 h-80 rounded-lg shadow-lg">
      <p>{programer.name}</p>
    </div>
  );
};

export default Card;
