import React from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const MovieListHeading = ({
  setGenre,
  heading,
  searchValue,
  setSearchValue,
}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand ms-2">MovieTime</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/favourites">Favoriter</Link>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end w-100">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="ps-2">
          <button type="button" class="btn btn-primary">
            Search Movie
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MovieListHeading;