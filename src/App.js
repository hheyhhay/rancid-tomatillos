import React, { Component } from 'react';
import './App.css';
import movieData from './data/movie-data';
import Movies from './Movies.js';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: movieData["movies"]
      }
  }

  showDetails = (id) => {
    console.log(id)
    const filteredMovie = this.state.movies.find(movie => movie.id === id)
    console.log('filteredMovie', filteredMovie)
    this.setState({movies: [filteredMovie]})
  }
  componentDidUpdate = () => {
    console.log('>>>BUTTONCLICKED!')
    return (
      <p>CHANGED HERE </p>
    )
  }

  render() {
    return (
      <main className='App'>
        <h2>Movies</h2>
        <Movies movies={this.state.movies}
                showDetails={this.showDetails}
                />
      </main>
    )
  }
}

export default App;
