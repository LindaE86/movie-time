import React, { useEffect, useContext, useState } from "react";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/context";

const Home = ({
  handleFavouritesClick,
  favouriteComponent,
  allMovies,
  favourites,
  setFavourites,
}) => {
  console.log("all", allMovies);
  const filterOnClick = (typeOf) => {
    if (typeOf === "all") {
      setMovies(allMovies);
    } else {
      let filtMovies = allMovies.filter(function (el) {
        return el.Type == typeOf;
      });
      setMovies(filtMovies);
    }
  };

  const { movies, setMovies } = useContext(MyContext);

  const [activeButton, setActiveButton] = useState(1);

  return (
    <>
      <div>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <button
            className={`btn btn-primary me-2 ${
              activeButton == 1 ? "btn-secondary" : "btn-dark"
            }`}
            onClick={() => {
              filterOnClick("all");
              setActiveButton(1);
            }}
          >
            All
          </button>
          <button
            className={`btn btn-primary me-2 ${
              activeButton == 2 ? "btn-secondary" : "btn-dark"
            }`}
            type="button"
            onClick={() => {
              filterOnClick("series");
              setActiveButton(2);
            }}
          >
            Series
          </button>
          <button
            className={`btn btn-primary me-2 ${
              activeButton == 3 ? "btn-secondary" : "btn-dark"
            }`}
            onClick={() => {
              filterOnClick("movie");
              setActiveButton(3);
            }}
          >
            Movies
          </button>
        </div>
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