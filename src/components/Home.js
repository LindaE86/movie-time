import React from 'react'
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import { useParams } from 'react-router-dom';

const Home = ({favourites, movies, handleFavouritesClick, favouriteComponent, handleFavouritesRemove, favouriteComponentRemove}) => {

    return (
<>
        <div className='row'>
            <MovieList movies={movies}
					handleFavouritesClick={handleFavouritesClick}
					favouriteComponent={favouriteComponent}/>
        </div>
        		<div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Favourites'/>
        </div>
                <div className='row'>
            <MovieList movies={favourites}
            handleFavouritesClick={handleFavouritesRemove}
            favouriteComponent={favouriteComponentRemove}/>
        </div>
    </>
    )

};

export default Home;