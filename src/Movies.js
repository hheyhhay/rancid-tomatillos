import React from 'react';
import Card from './Card';
import Details from './Details';
import './Movies.css';

const Movies = ({ movies, showDetails, showAllMovies }) => {
  const movieDetails = movies.map(movie => {
    return (
      <Details
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
        showAllMovies={ showAllMovies }
        />
    )
  })
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
      { movieCards.length === 1 && <div>{movieDetails}</div> }
      { movieCards.length > 1 && <div className='movie-container'>{movieCards}</div> }
    </div>
  )
}

export default Movies;
