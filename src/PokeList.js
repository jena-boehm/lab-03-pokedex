import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import data from './data.js';

export default class PokeList extends Component {
    render() {
        const filteredPokemon = data.filter((pokemon) => {
            if (!this.props.input) return true;

            if (pokemon.pokemon.includes(this.props.input)) return true;

            return false
        })

        // .filter((pokemon) => {
        //     if (!this.props.horns) return true;

        //     if (image.horns )
        // })
        return (
            <div>
                <div className='pokemon-list'>
                    {
                        filteredPokemon.map(pokemon =>
                        <PokeItem className='pokemon-item' image={pokemon.url_image} name={pokemon.pokemon} type={pokemon.type_1} ability={pokemon.ability_1} />)
                    }
                </div>
            </div>
        )
    }
}
