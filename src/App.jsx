import usePaginationClient from "./hooks/usePaginationClient";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

const App = () => {
  const [loading, data] = usePaginationClient(url, 2);
  return <div></div>;
};

export default App;
