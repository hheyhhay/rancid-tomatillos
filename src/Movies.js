import React from 'react';
import Card from './Card';
import Details from './Details';
import './Movies.css';
import { Route, Link } from "react-router-dom";


const Movies = ({ movies, showDetails, showAllMovies, selectedMovie }) => {

  // const movieDetails =
  //   return (
  //     <Details
  //       id={ selectedMovie['id'] }
  //       posterPath={ selectedMovie['poster_path'] }
  //       backdropPath={ selectedMovie['backdrop_path'] }
  //       title={ selectedMovie['title'] }
  //       averageRating={ selectedMovie['average_rating'] }
  //       releaseDate={ selectedMovie'release_date'] }
  //       overview={ selectedMovie['overview'] }
  //       genres={ selectedMovie['genres'] }
  //       budget={ selectedMovie['budget'] }
  //       revenue={ selectedMovie['revenue'] }
  //       runtime={ movie['runtime'] }
  //       tagline={ movie['tagline'] }
  //       showAllMovies={ showAllMovies }
  //       />
  //   )

  const movieCards = movies.map(movie => {
    return (
      <Card
        id={ movie['id'] }
        posterPath={ movie['poster_path'] }
        backdropPath={ movie['backdrop_path'] }
        title={ movie['title'] }
        averageRating={ movie['average_rating'] }
        releaseDate={ movie['release_date'] }
        overview={ movie['overview'] }
        genres={ movie['genres'] }
        budget={ movie['budget'] }
        revenue={ movie['revenue'] }
        runtime={ movie['runtime'] }
        tagline={ movie['tagline'] }
        showDetails={ showDetails }
        />
    )
  })
  return (
    <div >
      { movieCards.length === 1 && <div>{ selectedMovie }</div> }
      { movieCards.length > 1 &&  <div className='movie-container'>{movieCards}</div> }
    </div>
  )
}

export default Movies;

// Tercinary the return!
