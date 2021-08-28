import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: [],
      }
  }

  componentDidMount = () => {
    this.showAllMovies();
  }

  showDetails = (id) => {
    console.log(id)
    const filteredMovie = this.state.movies.find(movie => movie.id === id)
    console.log('filteredMovie', filteredMovie)
    this.setState({movies: [filteredMovie]})
  }

  showAllMovies = () => {
    const url = "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({movies: data.movies}))
  }

  render() {
    return (
      <main className='App'>
        <h2>Movies</h2>
        <Movies movies={this.state.movies}
                showDetails={this.showDetails}
                showAllMovies={this.showAllMovies}
                />
      </main>
    )
  }
}

export default App;
