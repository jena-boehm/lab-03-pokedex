import React, { Component } from 'react'

export default class Searchbar extends Component {
    render() {
        console.log(this.props.input);
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input name="search" value={this.props.input} onChange={this.props.handleChange}></input>
                <button>Submit</button>
            </form>
        )
    }
}
