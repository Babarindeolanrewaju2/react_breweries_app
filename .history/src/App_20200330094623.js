import React, { Component } from 'react';
import Breweries from './component/Breweries';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      breweries: []
    }
  }

  search() {
    const BASE_URL = `https://api.openbrewerydb.org/breweries`;
    fetch(`${BASE_URL}`, {
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

        <button
          type="text"
          onClick={event => { this.search() }}
        >Get Breweries
        </button>
        {this.state.breweries.map(brewery => (<Breweries key={brewery.id} joke={brewery} />))}
      </div>
    )
  }
}

export default App;