import { useAppContext } from "../../context/AppContext";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = () => {
  const { movies } = useAppContext();

  return (
    <section className="mt-28 w-4/5 sm:w-full m-auto">
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-3">
        {movies.Search &&
          movies.Search.map((movie: any, index: any) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
      </section>
      {!movies.Search && (
        <h1 className="text-white text-6xl font-bold mt-8 w-full">
          No Movies found!
        </h1>
      )}
    </section>
  );
};

export default MovieList;
