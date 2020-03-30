import React, { Component } from 'react';
import { Breweries } from './component/Breweries';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      breweries: []
    }
  }

  breweries() {
    const BASE_URL = `https://api.openbrewerydb.org/breweries`;
    fetch(`${BASE_URL}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('book items', json);
        this.setState({ breweries: json });
      })
  }

  getBrewery() {
    const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
    fetch(`${BASE_URL}${this.state.query}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('book items', json);
        let { items } = json;
        this.setState({ items });
      })
  }

  render() {
    return (
      <div className="App">
        <h2 className="title">Breweries Search</h2>
        <input
          type="text"
          placeholder="Search for a Book"
          onChange={event => { this.setState({ query: event.target.value }) }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              getBrewery()
            }
          }}
        />

        <button
          type="text"
          onClick={event => { this.search() }}
        >Get Breweries
        </button>
        {this.state.breweries.map(brewery => (<Breweries key={brewery.id} brewery={brewery} />))}
      </div>
    )
  }
}

export default App;