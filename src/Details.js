import React from 'react';
import './Details.css';
import './images/back-arrow.svg'

const Details=(props) => {
  return (
    <div className='movie-details' >
      <img className='movie-backdrop' height='200px' src={ props.backdropPath } alt={`${props.title} backdrop image`}/>
      <h3 className='movie-title' > { props.title }</h3>
      <p className='tagline' > { props.tagline }</p>
      <p className='detail-rating' > ⭐️{ props.averageRating.toFixed(1) }</p>
      <p className="movie-overview" > { props.overview }</p>
      <p className='budget' > BUDGET: $ { props.budget }</p>
      <p className='revenue' > REVENUE: $ { props.revenue }</p>
      <p className='runtime' > RUNTIME: { props.runtime } mins </p>
      <p className='movie-releaseDate' > Released on: { props.releaseDate }</p>
      <img src={ '/back-arrow.svg' } className="arrow-icon" alt="Back arrow" onClick={ () => props.showAllMovies() }/>
    </div>
  )
}

export default Details;
