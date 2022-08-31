import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (url: string) => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.log(`ERROR ${err}`);
      }
    };

    getData(url);
  }, [url]);

  return { data };
};

export default useAxiosFetch;
