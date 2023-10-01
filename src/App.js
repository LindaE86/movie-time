import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieInformation from "./components/MovieInformation";
import FavouritesList from "./components/FavouritesList";
import { MyContext } from "./context/context";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState([]);
  const [searchValue, setSearchValue] = useState({});

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ce5f6188`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setAllMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    setLoadingMovies(true);
    getMovieRequest(searchValue);
    let movieFavourites = localStorage.getItem("react-movie-app-favourites");
    let movieFavouritesParsed = JSON.parse(movieFavourites);
    if (movieFavouritesParsed != null) {
    setFavourites(movieFavouritesParsed);
    }
    setLoadingMovies(false);
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const movieId = favourites.filter((x) => x.imdbID === movie.imdbID);

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
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MyContext.Provider
              value={{
                favourites,
                setFavourites,
                movies,
                setMovies,
                loadingMovies,
              }}
            >
              <Home
                handleFavouritesClick={addFavouriteMovie}
                favouriteComponent={AddFavourites}
                setMovies={setMovies}
                allMovies={allMovies}
                setFavourites={setFavourites}
              />
            </MyContext.Provider>
          }
        />
        <Route
          exact
          path="/favourites"
          element={
            <MyContext.Provider
              value={{ favourites, setFavourites, movies, setMovies }}
            >
              <FavouritesList
                handleFavouritesRemove={removeFavouriteMovie}
                favouriteComponentRemove={RemoveFavourites}
              />
            </MyContext.Provider>
          }
        />
        <Route path="/movie/:id" element={<MovieInformation />} />
      </Routes>
    </div>
  );
};

export default App;
