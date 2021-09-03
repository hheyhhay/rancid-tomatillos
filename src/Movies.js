import React from 'react';
import './Movies.css';

import { Link } from "react-router-dom";

const Movies = ( { movies } ) => {
  const movieCards = movies.map(movie => {
    return (
      <Link to={ `/${movie['id']}` } id={ movie['id'] } className='movie-card'>
         <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster` }/>
      </Link>
    )
  })

  return (
    <div className='movies-display'>
      { movieCards.length >= 1 &&  <div className='movie-container'>{ movieCards }</div> }
    </div>
  )
}

export default Movies;
