export function fetchMovies() {

 return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(response => response.json())
}

export const fetchSingleMovie = async (id) => {
  // try {
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    let response = await fetch(url);
    if (!response.ok) {
      console.log('response status', response.status)
      throw new Error('We don\'t have that movie yet, sorry!')
    }
    let movieDetails = await response.json();
    return movieDetails;

  // catch (e) {
  //   console.log(e.message)
  //   return e.message;
  // }
}
