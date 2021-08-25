import React from 'react';
import Card from './Card.js';
// import '/Movies.css';

const Movies = ({ movies }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        id={movie['id']}
        posterPath={movie['poster_path']}
        backdropPath={movie['backdrop_path']}
        title={movie['title']}
        averageRating={movie['average_rating']}
        releaseDate={movie['release_date']}
        />
    )
  })
  console.log(movies)
  return (
    <div className="movie-container">
      <h2>Movies</h2>
      {movieCards}
    </div>
  )
}

export default Movies;
