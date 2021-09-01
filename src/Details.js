import React from 'react';
import './Details.css';
import './images/back-arrow.svg';
import { Link } from "react-router-dom";


const Details = ( { selectedMovie:movie, showAllMovies }) => {

 if (!movie.title) {
   return null;
 } else {
    return (
      <div className='movie-details'>
        <div className='movie-info'>
          <div className='title-container'>
            <h1 className='movie-title text'>{ movie.title }</h1>
          </div>
          { movie.tagline && <p className='tagline text'><em>{ `"${ movie.tagline }"` }</em></p> }
          <p className='detail-rating text'>⭐️{ movie.average_rating.toFixed(1) }</p>
          <p className='movie-overview text'>{ movie.overview }</p>
          { movie.budget > 0 && <p className='budget text'>BUDGET: $ { movie.budget }</p> }
          { movie.revenue > 0 && <p className='revenue text'>REVENUE: $ { movie.revenue }</p> }
          <p className='runtime text'>RUNTIME: { movie.runtime } mins</p>
          <p className='movie-releaseDate text'>Released on: { movie.release_date }</p>
          <Link to="/">
            <img src={ '/back-arrow.svg' } className='arrow-icon' alt='Back arrow' onClick={ () => showAllMovies() }/>
          </Link>
        </div>
        <img className='movie-cover' src={ movie.poster_path } alt={ `${ movie.title } Poster` }/>
        <img className='movie-backdrop' src={ movie.backdrop_path } alt={ `${ movie.title } Backdrop` }/>
      </div>
    )
  }
}

export default Details;
