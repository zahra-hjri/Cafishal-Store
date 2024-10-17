import { useEffect, useState } from "react";
import usePaginationClient from "./hooks/usePaginationClient";
import Loading from "./components/Loading/Loading";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

const App = () => {
  const [loading, data] = usePaginationClient(url, 2);
  const [page, setPage] = useState(1);
  const [programmers, setProgramers] = useState([]);
  const pages = data.length;
  console.log(`p: ${pages}`);
  useEffect(() => {
    if (loading) return;
    setProgramers(data[page - 1]);
  }, [loading, page]);

  return (
    <>
      <div className="mx-auto">
        {loading && <Loading />}
        {!loading && (
          <ul className="flex justify-evenly gap-10 pt-20">
            {programmers.map(({ id, ...programer }) => (
              <Card key={id} programer={programer} />
            ))}
          </ul>
        )}
      </div>

      <Pagination pages={pages} setPage={setPage} page={page} />
    </>
  );
};

export default App;
