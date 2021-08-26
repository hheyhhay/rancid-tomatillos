import React from 'react';
import Card from './Card.js';
import './Movies.css';

const Movies = ({ movies, showDetails }) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        id={movie['id']}
        posterPath={movie['poster_path']}
        backdropPath={movie['backdrop_path']}
        title={movie['title']}
        averageRating={movie['average_rating']}
        releaseDate={movie['release_date']}
        overview={movie['overview']}
        genres={movie['genres']}
        budget={movie['budget']}
        revenue={movie['revenue']}
        runtime={movie['runtime']}
        tagline={movie['tagline']}

        showDetails={showDetails}

        />
    )
  })
  console.log(movies)
  return (
    <div className="movie-container" >
      {movieCards}
    </div>
  )
}

export default Movies;
