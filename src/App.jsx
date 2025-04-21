import { useEffect, useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import "./index.css";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvider.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieSearch = await fetch(url, options);
      const data = await movieSearch.json();
      console.log(data);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";

      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovies();
  }, []);

  return (
    <MovieProvider>
      <div className="bg-black/90">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title="Kết quả tìm kiếm" data={movieSearch} />
        ) : (
          <>
            <MovieList title={"Phim hot"} data={movie} />
            <MovieList title={"Phim đề cử"} data={movieRate} />
          </>
        )}
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
