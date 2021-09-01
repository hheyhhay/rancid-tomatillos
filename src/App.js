import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import { Route, Link } from "react-router-dom";
import Card from './Card';
import Details from './Details';
import { fetchMovies, fetchSingleMovie} from './apiCalls';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: [],
        selectedMovie: {},
        error: '',
        isLoading: false
      }
  }

  componentDidMount = () => {

    fetchMovies()
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  showDetails = (id) => {

    fetchSingleMovie(id)
      .then(data => this.setState({ selectedMovie: data.movie }))
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  showAllMovies = () => {
    this.setState({ selectedMovie: {} })
  }

  render() {
    const { movies, selectedMovie, error, isLoading } = this.state;
    return (
      <main className='App'>
        <nav className='nav-bar'>
          <img src = { 'charles-deluvio-I6mx55jXOvM-unsplash.jpg' } className="popcorn" alt="Spilt popcorn"/>
          <div className='nav-text'>
            <h2 className='header'>Rancid Tomatillos</h2>
          </div>
        </nav>
        { this.state.isLoading && <h3 className='error'>Loading Movies...</h3> }
        { this.state.error && <h3 className='error'>Movies to failed to load. Please try again later!</h3> }

      <Route exact path="/">
          <Movies id='movie'
            movies={ movies }
            showDetails={ this.showDetails }
          />
      </Route>
      <Route exact path='/:id' render={ () => <Details selectedMovie={ selectedMovie } showAllMovies={ this.showAllMovies } /> } />
      </main>
    )
  }
}

export default App;
