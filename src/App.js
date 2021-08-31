import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import { Route, Link } from "react-router-dom";
import Card from './Card';
import Details from './Details'

const API = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
const DEFAULT_QUERY = '';

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
    this.showAllMovies();
  }

  showDetails = (id) => { // eventListener triggered at Click
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ movies: [data.movie] }))
      .catch(error => this.setState({ error: error, isLoading: false }))
    return
  }

  fetchData = (id) => {
    fetch(API + id)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  showAllMovies = () => {
    this.setState({ isLoading: true })
    fetch(API + DEFAULT_QUERY)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.movies, isLoading: false }))
      .catch(error => this.setState({ error: error, isLoading: false }))
  }

  render() {
    return (
      <main className='App'>
        <nav className='nav-bar'>
          <img src = { '/charles-deluvio-I6mx55jXOvM-unsplash.jpg' } className="popcorn" alt="Spilt popcorn"/>
          <div className='nav-text'>
            <h2 className='header'>Rancid Tomatillos</h2>
          </div>
        </nav>
        { this.state.isLoading && <h3 className='error'>Loading Movies...</h3> }
        { this.state.error && <h3 className='error'>Movies to failed to load. Please try again later!</h3> }

      <Route exact path="/" render={ () => {
        return (
          <Movies id='movie'
            movies={ this.state.movies }
            showDetails={ this.showDetails }
            showAllMovies={ this.showAllMovies }
          />
        )
        }} />

      <Route exact path="/details/:id" render={( { match } ) => {
        console.log(match.params)
        // const currentMovie = this.showDetails(match.params.id)
        // console.log(currentMovie)
        // this.showDetails(match.params.id)
        //console.log(this.state)

        return (
          <Card />
        )
        // const detailById = this.fetchData(match.params.id)
      }}/>
      </main>
    )
  }
}

export default App;

// Not sure if we need a <Route > for home...
//
// <Movies id='movie'
//         movies={ this.state.movies }
//         showDetails={ this.showDetails }
//         showAllMovies={ this.showAllMovies }
//         />
// <Route exact path='/home/home' render={} />
