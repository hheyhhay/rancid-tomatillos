import React from 'react';
import './Movies.css';
import './Card.css';

import { Link } from "react-router-dom";

const Movies = ( { movies, showDetails, showAllMovies } ) => {

  const movieCards = movies.map(movie => {

    return (
      <Link to={ `/${movie['id']}` } className='movie-card'>
         <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster` } onClick={ () => showDetails(movie["id"]) }/>
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
