import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';

const API = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
const DEFAULT_QUERY = ''

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: [],
        error: '',
        isLoading: false
      }
  }

  componentDidMount = () => {
    this.setState({isLoading: true})

    fetch(API + DEFAULT_QUERY)
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies, isLoading: false}))
    .catch(error => this.setState({error: error, isLoading: false}))


    // const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => this.setState({movies: data.movies, isLoading: false}))
    //   .catch(error => this.setState({error: error, isLoading: false}))
  }
  //
  // componentDidUpdate = (prevProps, prevState) => {
  //   console.log('this.state.movies', this.state.movies)
  //   console.log('prevState', prevState.movies)
  //   console.log('prevProps', prevProps)
  //   if ( prevState.movies.length !== this.state.movies.length) {
  //     console.log('>>>>here')
  //     console.log('PROPSafterUPDATE', this.state.movies)
  //     let urlId;
  //     this.state.movies.forEach(movie => urlId = movie.id)
  //
  //     fetch(API + `/${urlId}`)
  //     .then(res => res.json())
  //     .then(data =>  this.setState({movies: [data.movie], isLoading: false}))
  //     .catch(error => this.setState({error: error, isLoading: false}))
  //
  //   }
  // }

  //

  showDetails = (id) => { // eventListener triggered at Click
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({movies: [data.movie]}))
  }

  fetchData = (id) => {
    console.log("fetchData(id) is called")
    fetch(API + id)
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies, isLoading: false}))
    .catch(error => this.setState({error: error, isLoading: false}))
  }

  showAllMovies = () => {
    console.log('show all movies is called')
    fetch(API + DEFAULT_QUERY)
    .then(res => res.json())
    .then(data => this.setState({movies: data.movies, isLoading: false}))
    .catch(error => this.setState({error: error, isLoading: false}))
  }


  render() {

    return (
      <main className='App'>
        <nav className='nav-bar'>
          <h2>Rancid Tomatillos</h2>
          <p className='nav-subhead'>Find your next favorite movie</p>
        </nav>
        {this.state.isLoading && <h3 className='error'>Loading Movies...</h3>}
        {this.state.error && <h3 className='error'>Movies to failed to load. Please try again later!</h3>}
        <Movies id='movie'
                movies={this.state.movies}
                showDetails={this.showDetails}
                showAllMovies={this.showAllMovies}
                />
      </main>
    )
  }
}

export default App;
