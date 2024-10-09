import { useEffect, useState } from "react";
import usePaginationClient from "./hooks/usePaginationClient";
import Loading from "./components/Loading/Loading";
import Card from "./components/Card/Card";
const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

const App = () => {
  const [loading, data] = usePaginationClient(url, 3);
  const [page, setPage] = useState(1);
  const [programmers, setProgramers] = useState([]);
  // const pages = data.length;
  useEffect(() => {
    if (loading) return;
    setProgramers(data[page - 1]);
  }, [loading]);

  return (
    <div className="">
      {loading && <Loading />}
      {!loading && (
        <ul className="flex justify-evenly gap-10">
          {programmers.map(({ id, ...programer }) => (
            <Card key={id} programer={programer} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
