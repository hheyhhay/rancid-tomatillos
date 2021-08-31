import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='movie-card' onClick={ () => props.showDetails(props.id) } >
      <img className='movie-poster' src={ props.posterPath } alt={ `${props.title} poster image` }/>
    </div>
  )
}

export default Card;
// Conditional Rendering to show indiviual cards
//put onClick on the Card click
//change to class component from function
