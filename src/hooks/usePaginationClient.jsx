import { useEffect, useState } from "react";
import _ from "lodash";

const usePaginationClient = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const dataPage = _.chunk(data, pageSize);
    setData(dataPage);
    setLoading(false);
    console.log(dataPage);
  };

  useEffect(() => {
    getData();
  }, []);

  return [loading, data];
};

export default usePaginationClient;
