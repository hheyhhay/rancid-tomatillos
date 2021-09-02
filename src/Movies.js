import React from 'react';
import './Movies.css';
import './Card.css';

import { Link } from "react-router-dom";

const Movies = ( { movies } ) => {

  const movieCards = movies.map(movie => {

    return (
      <Link to={ `/${movie['id']}` } className='movie-card'>
         <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster` } />
      </Link>
    )
  })

  return (
    <div >
      { movieCards.length &&  <div className='movie-container'>{movieCards}</div> }
    </div>
  )
}

export default Movies;

// onClick={ () => showDetails(movie["id"]) }
