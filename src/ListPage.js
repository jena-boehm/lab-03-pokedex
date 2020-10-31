import React, { Component } from 'react'
import Searchbar from './Searchbar.js'
import Dropdown from './Dropdown.js'
import PokeList from './PokeList.js'
import request from 'superagent';


export default class ListPage extends Component {
    state = {
        input: '',
        pokemon: [],
        order: '',
        category: ''
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchPokemon();
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        });
    }
    
    handleCategoryChange = async (e) => {
    await this.setState({
        category: e.target.value
    });
    await this.fetchPokemon();
    }
    
    handleOrderChange = async (e) => {
    await this.setState({
        order: e.target.value
    });
    await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.input}&sort=${this.state.category}&direction=${this.state.order}&perPage=20`)

        this.setState({ pokemon: response.body.results })
        console.log(this.state.order);
    }

    render() {
        return (
            <div className="App">
                <div className="main-container">
                    <Searchbar 
                    handleChange={this.handleChange} 
                    input={this.state.input} 
                    handleSubmit={this.handleSubmit} />
                    <Dropdown 
                    handleCategoryChange={this.handleCategoryChange} 
                    handleOrderChange={this.handleOrderChange} />
                    {
                        this.state.pokemon.length === 0
                        ? <iframe src="https://gifer.com/embed/g0R5" 
                            title="loading"
                            className="loading"
                            width="100px" 
                            height="100px" 
                            frameBorder="0" 
                            allowFullScreen />
                        : <PokeList 
                                pokemonData={this.state.pokemon} className="poke-item" />
                    }
                </div> 
            </div>
        )
    }
}
