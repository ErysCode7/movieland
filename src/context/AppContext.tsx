import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const AppContext = createContext<any>("");

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const API_URL = "https://www.omdbapi.com?apikey=f690204a";

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [movies, setMovies] = useState<String[]>([]);
  const [search, setSearch] = useState<string>("Avengers");

  const { data } = useAxiosFetch(`${API_URL}&s=${search}`);

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  const value = {
    movies,
    search,
    setSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
