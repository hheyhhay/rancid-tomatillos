import React, { Component } from 'react';
import './App.css';
import movieData from './data/movie-data'

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: movieData["movies"]
      }
  }

  render() {
    return (
      <h1>Pooooooop</h1>
    )
  }
}

export default App;
