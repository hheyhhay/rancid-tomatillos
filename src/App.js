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

  showDetails = () => {
    console.log('showDetails')
    this.setState({movies: []})
    console.log(this.state)
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
