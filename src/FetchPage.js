import React, { Component } from 'react'
import request from 'superagent';

export default class FetchPage extends Component {
  state = {
    input:'',
    submit: '',
    filter: '',
    pokemon: []
  }


handleChange = e => {
    this.setState({
        input: e.target.value
    });
}

handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
        submit: this.state.input
    })
    await this.fetchPokemon();
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

componentDidMount = async () => {
  await this.fetchPokemon();
}

fetchPokemon = async () => {
  const response = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')

  this.setState({ pokemon: response.body.results })
}

  render() {
    console.log(this.state.submit);
    return (
      <div className="App">
        <div className="pokemon-list">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} />
            <button>Search</button>
          </form>
            {
              this.state.pokemon.length === 0
              ? <iframe src="https://gifer.com/embed/g0R5" 
                  title="loading"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen />
              : this.state.pokemon.map(pokemon => 
                  <div key={pokemon.pokemon}>
                  <p>{pokemon.pokemon}</p>
                  <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100" />
                  <p>{pokemon.type_1}</p>
                  </div>)
            }
        </div>
      </div>
  
      );
  }
}

