import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";

const SearchForm = () => {
  const { search, setSearch } = useAppContext();
  return (
    <div className="mt-8 relative">
      <div className="absolute w-full ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-300 rounded-3xl outline-0 border-0 px-4 py-2 sm:py-4 text-slate-700"
        />
        <FaSearch className="absolute right-4 top-[50%] translate-y-[-50%]" />
      </div>
    </div>
  );
};

export default SearchForm;
