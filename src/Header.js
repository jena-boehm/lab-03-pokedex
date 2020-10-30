import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">Pokedex</div>
                <ul className="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link> 
                    </li>

                </ul>
            </div>
        )
    }
}
