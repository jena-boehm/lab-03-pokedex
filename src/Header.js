import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">Pokedex</div>
                <div className="navigation">
                    <a href="/">Home</a>
                    <span> | </span>
                    <a href="./list">List</a> 

                </div>
            </div>
        )
    }
}
