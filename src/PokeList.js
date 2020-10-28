import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import data from './data.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                <div className='pokemon-list'>
                    {
                        data.map(pokemon =>
                        <PokeItem className='pokemon-item' image={pokemon.url_image} name={pokemon.pokemon} type={pokemon.type_1} />)
                    }
                </div>
            </div>
        )
    }
}
