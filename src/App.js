import './App.css';
import Header from './Header.js'
import PokeList from './PokeList.js'
import Searchbar from './Searchbar.js'
import Dropdown from './Dropdown.js'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    input:'',
    submit: '',
    filter: ''
  }


handleChange = e => {
    this.setState({
        input: e.target.value
    });
}

handleSubmit = e => {
    e.preventDefault();
    this.setState({
        submit: this.state.input
    })
}

handleCategoryChange = e => {
  this.setState({
      input: e.target.value
  });
}

handleSortChange = e => {
  this.setState({
      input: e.target.value
  });
}
  render() {
    console.log(this.state.submit);
    return (
        <div className="App">
          <Header />
          <div className="main-container">
            <Searchbar 
            handleChange={this.handleChange} 
            input={this.state.input} 
            handleSubmit={this.handleSubmit} />
            <Dropdown 
            handleCategoryChange={this.handleCategoryChange} 
            handleSortChange={this.handleSortChange} />
            <PokeList input={this.state.submit} />
          </div> 
        </div>
      );
  }
}

