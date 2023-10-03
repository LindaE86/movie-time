import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { Link, useNavigate, useLocation } from "react-router-dom";

const MovieListHeading = ({ setSearchValue }) => {
  const navigator = useNavigate();
  const location = useLocation();

  const [valueToSearch, setValueToSearch] = useState();

  return (
    <nav class="justify-content-start navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand ms-2">
        MovieTime
      </Link>

      <div>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/favourites" className="navbar-brand ms-2">
              Favoriter
            </Link>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end w-100">
        <SearchBox setValueToSearch={setValueToSearch} />
        <div className="ps-2">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={(e) => {
              if (location !== "/") {
                navigator("/");
              }
              setSearchValue(valueToSearch);
            }}
          >
            Search Movie
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MovieListHeading;