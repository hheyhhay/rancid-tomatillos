import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='movie-card' onClick={ () => props.showDetails(props.id) } >
      <img className='movie-poster' src={ props.posterPath } alt={ `${props.title} poster image` }/>
      <div className='movie-text-front'>
        <h3 className='movie-title'>{ props.title }</h3>
        <p className='movie-genres'>{ props.genres }</p>
        <p className='movie-rating'>⭐️ { props.averageRating.toFixed(1) }</p>
      </div>
    </div>
  )
}

export default Card;
// Conditional Rendering to show indiviual cards
//put onClick on the Card click
//change to class component from function
