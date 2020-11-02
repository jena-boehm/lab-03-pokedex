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
        category: '',
        pageNumber: 1,
        count: ''
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

    handleIncrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1,
        })
        await this.fetchPokemon()
    }

    handleDecrement = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1,
        })
        await this.fetchPokemon()
    }

    fetchPokemon = async () => {
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.input}&sort=${this.state.category}&direction=${this.state.order}&page=${this.state.pageNumber}&perPage=20`)

        this.setState({ pokemon: response.body.results, 
            loading: false, 
            count: response.body.count 
        })
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
                        <div className="page-navigation">
                            <div className="page-count">
                                <span>Page: {this.state.pageNumber} / </span>
                                <span>{Math.ceil(this.state.count / 20)}</span>
                            </div>
                            <div className="page-buttons">
                                {
                                    this.state.pageNumber !== 1 &&
                                    <button onClick={this.handleDecrement}>Previous</button>
                                }
                                {
                                    this.state.pageNumber !== Math.ceil(this.state.count / 20) &&
                                    <button onClick={this.handleIncrement}>Next</button>
                                }
                            </div>
                    </div>
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
