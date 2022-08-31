import { Link } from "react-router-dom";

interface MovieDetails {
  Title: string;
  Poster: string;
  Type: string;
  Year: string | number;
  imdbID: any;
}

const MovieCard: React.FC<MovieDetails> = ({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
}) => {
  return (
    <div className="rounded flex flex-col pb-10  h-full">
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
        className="w-full h-full rounded"
      />
      <div className="bg-slate-700 pt-4 pl-4 pb-4">
        <h3 className="text-slate-100 text-xl font-extrabold">{Title}</h3>
        <h4 className="capitalize text-slate-400">{Type}</h4>
        <p className="text-slate-500">{Year}</p>
        <Link to={`/movie-details/${imdbID}`}>
          <button className="cursor-pointer text-red-300 mt-1">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
