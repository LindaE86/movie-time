import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";

const FavouritesList = ({
  handleFavouritesRemove,
  favouriteComponentRemove,
  favourites,
  setFavourites,
  isFavouritesList,
}) => {
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  return (
    <div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={handleFavouritesRemove}
          favouriteComponent={favouriteComponentRemove}
          favourites={favourites}
          isFavouritesList={true}
        />
      </div>
    </div>
  );
};

FavouritesList.propTypes = {};

export default FavouritesList;