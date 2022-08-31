import { useParams } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";

const MovieDetails = () => {
  const { movies } = useAppContext();
  const { id } = useParams();

  if (movies.Search) {
    const movie = movies.Search.find(
      (movie: any) => movie.imdbID.toString() === id
    );

    const { Poster, Title, Type, Year, imdbID } = movie || {};

    return (
      <main className="w-4/5 m-auto mt-24">
        <div className="rounded flex flex-col md:flex-row pb-10 h-full">
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
            className="rounded 2xl:w-3/6"
          />
          <div className="pt-4 pl-4 pb-4">
            <h3 className="text-slate-100 font-extrabold text-3xl sm:text-6xl">
              {Title}
            </h3>
            <h4 className="capitalize text-slate-300 mt-2 sm:mt-4">{Type}</h4>
            <p className="text-slate-300 mt-2 sm:mt-4">{Year}</p>
            <p className="text-slate-100 mt-10">
              Please go to{" "}
              <a
                href={`https://www.google.com/`}
                target="_blank"
                className="text-red-300"
              >
                Google
              </a>{" "}
              to see more about these movie
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-[95%] m-auto md:w-4/5 mt-28">
      {!movies.Search && (
        <div>
          <h1 className="text-white text-6xl font-bold mt-8 w-full">
            No Movies found!
          </h1>
        </div>
      )}
    </main>
  );
};

export default MovieDetails;
