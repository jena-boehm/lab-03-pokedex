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
                            <div key={pokemon.pokemon} className="poke-item">
                            <img src={pokemon.url_image} alt={pokemon.pokemon} width="110" height="110" />
                            <p className="name">{pokemon.pokemon}</p>
                            <p className="type">Type: {pokemon.type_1}</p>
                            <p className="type">Type: {pokemon.type_2}</p>
                            <p className="ability">Ability: {pokemon.ability_1}</p>
                            <p className="ability">Ability: {pokemon.attack}</p>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}
