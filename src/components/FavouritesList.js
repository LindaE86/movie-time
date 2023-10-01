import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import MovieListHeading from "./MovieListHeading";
import MovieList from "./MovieList";
import { MyContext } from "../context/context.js";

const FavouritesList = ({
  handleFavouritesRemove,
  favouriteComponentRemove,
}) => {
  const { favourites, setFavourites } = useContext(MyContext);
  return (
    <div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={handleFavouritesRemove}
          favouriteComponent={favouriteComponentRemove}
          isFavouritesList={true}
        />
      </div>
    </div>
  );
};

FavouritesList.propTypes = {};

export default FavouritesList;