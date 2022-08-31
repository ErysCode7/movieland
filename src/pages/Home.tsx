import { Logo, SearchForm } from "../components";
import MovieList from "../container/MovieList/MovieList";

const Home = () => {
  return (
    <div className="w-[95%] m-auto md:w-4/5">
      <Logo />
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default Home;
