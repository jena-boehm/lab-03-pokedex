import React, { Component } from 'react'
import data from './data.js';

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                <img className='image' src={this.props.image} alt={this.props.name} />
                <div className='name'>{this.props.name}</div>
                <div className='type'>{this.props.type}</div>
                <div className='ability'>{this.props.ability}</div>
            </div>
        )
    }
}
