import React from 'react';
import './Movies.css';

import { Link } from "react-router-dom";
let filteredCards = []
const Movies = ( { movies, filteredMovies } ) => {
  const movieCards = movies.map(movie => {
    return (
      <Link key={movie['id']} to={ `/${movie['id']}` } id={ movie['id'] } className='movie-card'>
         <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster` }/>
      </Link>
    )
  })
  if (filteredMovies ) {
    filteredCards = filteredMovies.map(movie => {
      return(
        <Link key={movie['id']} to={ `/${movie['id']}` } id={ movie['id'] } className='movie-card'>
           <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster` }/>
        </Link>
      )
    })
  }

  return (
    <div className='movies-display'>
      { filteredCards.length > 0 && <div className='movie-container'>{ filteredCards }</div>}
      { movieCards.length > 0 && !filteredCards.length && <div className='movie-container'>{ movieCards }</div> }
    </div>
  )
}

export default Movies;
