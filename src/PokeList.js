import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
// import data from './data.js';

export default class PokeList extends Component {
    state = {
        pokemon: []
    }

    render() {
        return (
            <div>
                <div className='pokemon-list'>
                    {
                        this.props.pokemonData.map(pokemon => 
                            <div key={pokemon.pokemon}>
                            <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100" />
                            <p>{pokemon.pokemon}</p>
                            <p>{pokemon.type_1}</p>
                            <p>{pokemon.type_2}</p>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}
