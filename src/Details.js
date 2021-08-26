import React from 'react';
import './Details.css';

const Details = (props) => {
  console.log(props)
  return (
    <div className='movie-details' onClick ={() => props.showDetails(props.id)} >
      <img className='movie-poster' height='200px' src={props.posterPath}/>
      <h3 className='movie-title'>{props.title}</h3>
      <p className='movie-genres'>{props.genres}</p>
      <p className='movie-rating'>⭐️ {props.averageRating.toFixed(1)}</p>
      <p className='tagline'>{props.tagline}</p>
    </div>
  )
}

export default Details;
// instead of props.showDetail we will have a props.goBack()
