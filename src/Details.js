import React, { Component } from 'react';
import './Details.css';
import './images/back-arrow.svg';
import { Link } from "react-router-dom";
import { fetchSingleMovie } from './apiCalls';
const dayjs = require('dayjs');

class Details extends Component {
  constructor() {
    super();
      this.state = {
        details: {},
        error: '',
        isLoading: false
      }
  }

  componentDidMount() {
    this.setState({ isLoading:true })
    fetchSingleMovie(this.props.selectedID)
       .then(data => this.setState({ details: data.movie, isLoading: false }))
       .catch(error => this.setState({ error: error.message, isLoading: false }))
  }
// cannot have conditional inside of a render...
  render() {

    const movie = this.state.details;
    const { errorMessage }= this.state.error;
    console.log(this.state.error)
    // console.log(typeof this.state.error)
    // console.log(this.state.error)
    // console.log('move.title', movie.title)
    debugger
    { errorMessage === 'We don\'t have that movie yet, sorry!' && <p className="error">----------------------?- </p> }
    console.log(movie.title)
// Should we move the if (!movie.title) into a {react conditional}
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
             <p className='detail-rating text'>{`⭐️  ${ movie.average_rating.toFixed(1)} `}</p>
             <p className='movie-overview text'>{ movie.overview }</p>
             { movie.budget > 0 && <p className='budget text'>Budget: $ { movie.budget }</p> }
             { movie.revenue > 0 && <p className='revenue text'>Revenue: $ { movie.revenue }</p> }
             <p className='runtime text'>Runtime: { movie.runtime } mins</p>
             <p className='movie-releaseDate text'>Released on { dayjs(movie.release_date).format('MMMM DD, YYYY') }</p>
             <Link to="/">
               <img src={ '/back-arrow.svg' } className='arrow-icon' alt='Back arrow' />
             </Link>
           </div>
           <img className='movie-cover' src={ movie.poster_path } alt={ `${ movie.title } Poster` }/>
           <img className='movie-backdrop' src={ movie.backdrop_path } alt={ `${ movie.title } Backdrop` }/>
         </div>
       )
}
  }
}

export default Details;

// if (errorMessage) {
//   return (
//     <h3 className='error'> errorMessage </h3>
//   )
// } else
