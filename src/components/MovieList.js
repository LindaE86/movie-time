import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieList = ({
  favouriteComponent,
  handleFavouritesClick,
  movies,
  favourites,
  isFavouritesList,
}) => {
  const FavouriteComponent = favouriteComponent;

  console.log("isFavorite", isFavouritesList);

  const checkStuff = (movie) => {
    let exists = favourites.filter(
      (favMovie) => favMovie.imdbID == movie.imdbID
    );
    if (exists.length > 0 && isFavouritesList) {
      return (
        <div onClick={() => handleFavouritesClick(movie)} className="overlay">
          <FavouriteComponent />
        </div>
      );
    }

    if (exists.length == 0 && !isFavouritesList) {
      return (
        <div onClick={() => handleFavouritesClick(movie)} className="overlay">
          <FavouriteComponent />
        </div>
      );
    }
  };

  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((movie, index) => (
          <div className="image-container d-flex justify-content-start m-4">
            {checkStuff(movie)}
            <div>
              <Link to={`/movie/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  alt="movie"
                  width="300"
                  height="440"
                ></img>
              </Link>
              <div className="d-flex justify-content-center text-center">
                <h2>{movie.Title}</h2>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Search for a movie</div>
      )}
    </>
  );
};

export default MovieList;