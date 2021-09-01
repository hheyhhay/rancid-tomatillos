import React from 'react';
import Card from './Card';
import Details from './Details';
import './Movies.css';
import './Card.css';

import { Route, Link } from "react-router-dom";


const Movies = ({ movies, showDetails, showAllMovies }) => {


  const movieCards = movies.map(movie => {
    // console.log(movie.posterPath)
    // console.log(movie)

    return (
      <Link to={`/${movie['id']}`} className='movie-card'>
         <img className='movie-poster' src={ movie["poster_path"] } alt={ `${movie["title"]} poster image` } onClick={ () => showDetails(movie["id"]) }/>
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

// Tercinary the return!
//  { movieCards.length === 1 && <div>{ selectedMovie }</div> }

//
// <Card
//   id={ movie['id'] }
//   posterPath={ movie['poster_path'] }
//   backdropPath={ movie['backdrop_path'] }
//   title={ movie['title'] }
//   averageRating={ movie['average_rating'] }
//   releaseDate={ movie['release_date'] }
//   overview={ movie['overview'] }
//   genres={ movie['genres'] }
//   budget={ movie['budget'] }
//   revenue={ movie['revenue'] }
//   runtime={ movie['runtime'] }
//   tagline={ movie['tagline'] }
//   showDetails={ showDetails }
//   />
