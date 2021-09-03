import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import { Route } from "react-router-dom";
import Details from './Details';
import { fetchMovies } from './apiCalls';

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

    this.setState({ isLoading: true })
    fetchMovies()
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  render() {
    const { movies, error, isLoading } = this.state;
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
            />
        </Route>
        <Route exact path='/:id' render={ ({ match }) => {
          const selectedID = match.params.id;
          return <Details
            selectedID={ selectedID }
            showAllMovies={ this.showAllMovies }
            />
          }}
        />
      </main>
    )
  }
}

export default App;
