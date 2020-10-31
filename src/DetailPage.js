import React, { Component } from 'react'
import fetch from 'superagent'
import PokeList from './PokeList.js'

export default class DetailPage extends Component {
state = {
    pokemon: []
}

componentDidMount = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)

    this.setState({ pokemon: response.body.results })
}

    render() {
        return (
            <div>
                <h1>{this.props.match.params.pokemon}</h1>
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
        )
    }
}
