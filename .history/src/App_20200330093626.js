import React, { Component } from 'react';
// import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
// // import Glyphicon from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search() {
    const BASE_URL = `https://api.openbrewerydb.org/breweries`;
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

        <button
          type="text"
          placeholder="Search for a Book"
          onClick={event => { this.search() }}
        />
      </div>
    )
  }
}

export default App;