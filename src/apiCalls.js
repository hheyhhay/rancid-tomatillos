export const fetchMovies = async () => {
  let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error('Movies failed to load. Please try again later!')
  }
  let allMovies = await response.json();
  return allMovies;
}

export const fetchSingleMovie = async (id) => {
  let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error('We don\'t have that movie yet, sorry!')
  }
  let movieDetails = await response.json();
  return movieDetails;
}
