import React from 'react';
import './Card.css';

const Card = (props) => {
  console.log(props)
  return (
    <div className='movie-card'>
      <img className='movie-poster' height='200px' src={props.posterPath}/>
      <div className='movie-text-front'>
        <h3 className='movie-title'>{props.title}</h3>
        <p className='movie-rating'>⭐️ {props.averageRating.toFixed(1)}</p>
      </div>
    </div>
  )
}

export default Card;
