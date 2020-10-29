import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'
import Searchbar from './Searchbar.js'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    input:'',
    submit: '',
    list: ''
  }


handleChange = e => {
    this.setState({
        input: e.target.value
    });
}

handleSubmit = e => {
    e.preventDefault();
    this.setState({
        submit: e.target.value
    })
}
  render() {
    return (
        <div className="App">
          <Header />
          <div className="main-container">
            <Searchbar handleChange={this.handleChange} input={this.state.input} onSubmit={this.state.handleSubmit} />
            <PokeList input={this.state.input} />
          </div>
        </div>
      );
  }
}

