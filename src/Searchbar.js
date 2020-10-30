import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="search" value={this.props.input} onChange={this.props.handleChange} className="searchbar"></input>
                    <button className="searchbar">Submit</button>
                </form>
            </div>
        )
    }
}
