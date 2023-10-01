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
    
    <nav class="justify-content-start navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand ms-2">
        MovieTime
      </Link>

      <div>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/favourites"className="navbar-brand ms-2">Favoriter</Link>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end w-100">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="ps-2">
          <button type="button" class="btn btn-secondary">
            Search Movie
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MovieListHeading;