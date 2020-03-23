import React, { Component } from 'react';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      strings: []
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ strings: users }))
  }

  render() {
    return (
      <div className="App">
        <Cardlist strings={this.state.strings} />
      </div>
    )
  }

}

export default App;
