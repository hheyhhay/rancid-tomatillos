export function fetchMovies() {
 return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(response => response.json())
}

export function fetchSingleMovie(id) {
  return fetch(`https://rancid-tomatillos.herokaupp.com/api/v2/movies/${id}`).then(response => response.json())
}
// const fetchAllMovies = () => {
//   const API = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
//   const DEFAULT_QUERY = '';
//   this.setState({ isLoading: true })
//   fetch(API + DEFAULT_QUERY)
//
// }
// export default fetchAllMovies;
