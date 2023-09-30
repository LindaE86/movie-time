import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const Home = ({
  movies,
  handleFavouritesClick,
  favouriteComponent,
  handleFavouritesRemove,
  favouriteComponentRemove,
  setMovies,
  allMovies,
  favourites,
  setFavourites,
}) => {
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  console.log("fav", favourites);

  const filterOnClick = (typeOf) => {
    let filtMovies = allMovies.filter(function (el) {
      return el.Type == typeOf;
    });
    setMovies(filtMovies);
  };
  return (
    <>
      <div>
        <button type="button" onClick={() => filterOnClick("series")}>
          Series
        </button>
        <button onClick={() => filterOnClick("movie")}>Movies</button>
        <div className="row d-flex justify-content-center">
          <MovieList
            movies={movies}
            handleFavouritesClick={handleFavouritesClick}
            favouriteComponent={favouriteComponent}
            favourites={favourites}
            isFavouritesList={false}
          />
        </div>
      </div>
    </>
  );
};

export default Home;