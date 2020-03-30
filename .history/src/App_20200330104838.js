import React, { Component } from 'react';
import { Breweries } from './component/Breweries';
import { ByCity } from './component/ByCity';
import { ByType } from './component/ByCity';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      breweries: [],
      byCity: [],
      byType: [],
    }
  }

  breweries = () => {
    const BASE_URL = `https://api.openbrewerydb.org/breweries`;
    fetch(`${BASE_URL}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('breweries', json);
        this.setState({ breweries: json });
      })
  }

  getBreweryByCity = () => {
    const BASE_URL = `https://api.openbrewerydb.org/breweries?by_city=`;
    fetch(`${BASE_URL}${this.state.query}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('by_city', json);
        this.setState({ byCity: json });
      })
  }

  getBreweryByType = (e, type) => {
    const BASE_URL = `https://api.openbrewerydb.org/breweries?by_type=`;
    fetch(`${BASE_URL}${type}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log('by_city', json);
        this.setState({ byCity: json });
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
              this.getBreweryByCity()
            }
          }}
        />
        {this.state.byCity.map(byCity => (<ByCity key={byCity.id} byCity={byCity} getBreweryByType={this.getBreweryByType} />))}
        {this.state.ByType.map(ByType => (<ByType key={byCity.id} byCity={byCity} getBreweryByType={this.getBreweryByType} />))}

        <hr />

        <button
          type="text"
          onClick={event => { this.breweries() }}
        >Get Breweries
        </button>
        {this.state.breweries.map(brewery => (<Breweries key={brewery.id} brewery={brewery} />))}
      </div>
    )
  }
}

export default App;