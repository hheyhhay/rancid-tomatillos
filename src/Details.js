import React from 'react';
import './Details.css';
import './images/back-arrow.svg';
import { Route, Link } from "react-router-dom";


const Details=(props) => {
  return (
    <div className='movie-details'>
      <div className='movie-info'>
        <div className='title-container'>
          <h1 className='movie-title text'>{ props.title }</h1>
        </div>
        { props.tagline && <p className='tagline text'><em>{ `"${props.tagline}"` }</em></p> }
        <p className='detail-rating text'>⭐️{ props.averageRating.toFixed(1) }</p>
        <p className='movie-overview text'>{ props.overview }</p>
        { props.budget > 0 && <p className='budget text'>BUDGET: $ { props.budget }</p> }
        { props.revenue > 0 && <p className='revenue text'>REVENUE: $ { props.revenue }</p> }
        <p className='runtime text'>RUNTIME: { props.runtime } mins</p>
        <p className='movie-releaseDate text'>Released on: { props.releaseDate }</p>
        <Link to="/">
          <img src={ '/back-arrow.svg' } className='arrow-icon' alt='Back arrow' onClick={ () => props.showAllMovies() }/>
        </Link>
      </div>
      <img className='movie-cover' src={ props.posterPath } alt={ `${props.title}Poster` }/>
      <img className='movie-backdrop' src={ props.backdropPath } alt={ `${props.title }Backdrop` }/>

    </div>
  )
}

export default Details;
