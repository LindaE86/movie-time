import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieInformation from "./components/MovieInformation";
import FavouritesList from "./components/FavouritesList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  const [genre, setGenre] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ce5f6188`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setAllMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
    let movieFavourites = localStorage.getItem("react-movie-app-favourites");
    let asd = JSON.parse(movieFavourites);
    console.log("asdasdd", asd);

    if (asd.length == 0) {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify([]));
    }
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const movieId = favourites.filter((x) => x.imdbID == movie.imdbID);

    if (movieId.length > 0) {
      return;
    }

    setFavourites([...favourites, movie]);
    const newFavouriteList = [...favourites, movie];
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    let movieFavourites = localStorage.getItem("react-movie-app-favourites");
    let asd = JSON.parse(movieFavourites);

    const newFavouriteList = asd.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites([...newFavouriteList]);
    saveToLocalStorage(newFavouriteList);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mb-4">
        <MovieListHeading
          heading="Movies"
          setGenre={setGenre}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              movies={movies}
              handleFavouritesClick={addFavouriteMovie}
              favouriteComponent={AddFavourites}
              handleFavouritesRemove={removeFavouriteMovie}
              favouriteComponentRemove={RemoveFavourites}
              setMovies={setMovies}
              allMovies={allMovies}
              favourites={favourites}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          exact
          path="/favourites"
          element={
            <FavouritesList
              handleFavouritesRemove={removeFavouriteMovie}
              favouriteComponentRemove={RemoveFavourites}
              favourites={favourites}
              setFavourites={setFavourites}
              isFavouritesList={true}
            />
          }
        />
        <Route path="/movie/:id" element={<MovieInformation />} />
      </Routes>
    </div>
  );
};

export default App;
