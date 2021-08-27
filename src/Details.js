import React from 'react';
import './Details.css';

const Details = (props) => {
  console.log(props)
  return (
    <div className='movie-details' onClick ={() => props.showDetails(props.id)} >
      <img className='movie-backdrop' height='200px' src={props.backdropPath}/>
      <h3 className='movie-title'>{props.title}</h3>
      <p className='tagline'>{props.tagline}</p>
      <p className='detail-rating'>⭐️ {props.averageRating.toFixed(1)}</p>
      <p className="movie-overview">{props.overview}</p>
      <p className='budget'>BUDGET: ${props.budget}</p>
      <p className='revenue'>REVENUE: ${props.revenue}</p>
      <p className='runtime'>RUNTIME: {props.runtime} mins </p>
      <p className='movie-releaseDate'>Released on: {props.releaseDate}</p>
    </div>
  )
}

export default Details;
// instead of props.showDetail we will have a props.goBack()
// To be added to Details:
// Take out: genres
// leave-in: tagline, rating, title, overview, backdrop, releaseDate,
//budget, revenue, runtime
