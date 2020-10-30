import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                            <Link to={`/pokemon/${pokemon.pokemon}`}>
                                <img src={pokemon.url_image} alt={pokemon.pokemon} width="110" height="110" />
                            </Link>
                            <p className="name">{pokemon.pokemon}</p>
                            <p className="type">Type: {pokemon.type_1}</p>
                            <p className="type">Type: {pokemon.type_2}</p>
                            <p className="ability">Ability: {pokemon.ability_1}</p>
                            <p className="attack">Attack: {pokemon.attack}</p>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}
