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

  render() {
    return (
      <main className='App'>
        <h2>Movies</h2>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App;
