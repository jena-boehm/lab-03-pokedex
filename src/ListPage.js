import React, { Component } from 'react'
import Searchbar from './Searchbar.js'
import Dropdown from './Dropdown.js'
import PokeList from './PokeList.js'
import request from 'superagent';


export default class ListPage extends Component {
    state = {
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
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.category}=${this.state.search}&sort=${this.state.sort}`)

        this.setState({ pokemon: response.body.results })
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
                    handleSortChange={this.handleSortChange} />
                    <PokeList input={this.state.submit} />
                </div> 
            </div>
        )
    }
}
