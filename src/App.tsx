import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./container/MovieList/MovieDetails/MovieDetails";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
