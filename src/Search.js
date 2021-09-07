import React, { Component } from 'react';
import './Search.css';
import { Link } from "react-router-dom";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  movieFilterOnChange = (event) => {
    console.log('hi from onChange', event.target.value);
    this.setState({
      inputValue: event.target.value
    })
  }

  filterSearch = (event) => {

    const movieResults = this.props.moviesSearch.filter(movie => {
      return movie.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    if (!movieResults.length) {
      this.props.stateChange("error", 'No movies!')
      this.props.stateChange('filteredMovies', [])
    } else {
      this.props.stateChange("error", '')
      this.props.stateChange('filteredMovies', movieResults)
    }
  }

  render(){
    return (
      <form action="/" method="get">
        <label htmlFor='header-search'>
          <span className='visually-hidden'>Seach Movies</span>
        </label>
        <input
          type='text'
          id='header-search'
          value={this.inputValue}
          placeholder='Search Movies'
          name='s'
          onChange={ this.movieFilterOnChange}
          onKeyUp={event => this.filterSearch(event)}
        />
      </form>
    )
  }

}

export default Search;
