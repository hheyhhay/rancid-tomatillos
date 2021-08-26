import React, { Component } from 'react';
import './Card.css';

// class Card extends Component {
//   constructor(props) {
//     super();
//       this.state = {card: props}
//   }
//
//   render() {
//     return (
//       <div className='movie-card' >
//       </div>
//     )
//   }
// }


// <img className='movie-poster' height='200px' src={props.posterPath}/>
// <div className='movie-text-front'>
//   <h3 className='movie-title'>{props.title}</h3>
//   <p className='movie-rating'>⭐️ {props.averageRating.toFixed(1)}</p>



// <img className='movie-poster' height='200px' src={props.posterPath}/>
// <div className='movie-text-front'>
//   <h3 className='movie-title'>{props.title}</h3>
//   <p className='movie-rating'>⭐️ {props.averageRating.toFixed(1)}</p>



const Card = (props) => {
  console.log(props)
  return (
    <div className='movie-card' onClick ={() => props.showDetails()} >
      <img className='movie-poster' height='200px' src={props.posterPath}/>
      <div className='movie-text-front'>
        <h3 className='movie-title'>{props.title}</h3>
        <p className='movie-rating'>⭐️ {props.averageRating.toFixed(1)}</p>
      </div>
    </div>
  )
}

export default Card;
// Conditional Rendering to show indiviual cards
//put onClick on the Card click
//change to class component from function
