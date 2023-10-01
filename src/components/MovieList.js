import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/context.js";
import FavouriteComponent from "./AddFavourites.js";
import RemoveFavourites from "./RemoveFavourites.js";

const MovieList = ({
  favouriteComponent,
  handleFavouritesClick,
  isFavouritesList,
}) => {
  const { movies, favourites, loadingMovies } = useContext(MyContext);

  const renderObjects = isFavouritesList ? favourites : movies;

  const checkStuff = (movie) => {
    let exists = favourites.filter(
      (favMovie) => favMovie.imdbID === movie.imdbID
    );

    if (exists.length > 0 && isFavouritesList) {
      return (
        <div onClick={() => handleFavouritesClick(movie)} className="overlay">
          <RemoveFavourites />
        </div>
      );
    }

    if (exists.length === 0 && !isFavouritesList) {
      return (
        <div onClick={() => handleFavouritesClick(movie)} className="overlay">
          <FavouriteComponent />
        </div>
      );
    }
  };

  return (
    <>
      {!loadingMovies ? (
        renderObjects && renderObjects.length > 0 ? (
          renderObjects.map((movie, index) => (
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
        )
      ) : (
        <div>Loading Movie</div>
      )}
    </>
  );
};

export default MovieList;