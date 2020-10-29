import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown-section">
                <div className="category-dropdown">
                    <select onChange={this.props.CategoryChange}>
                        <option value=''>Show All</option>
                        <option value='name'>Name</option>
                        <option value='type'>Type</option>
                        <option value='ability'>Ability</option>
                    </select>
                </div>
                <div className="sort-dropdown">
                    <select onChange={this.props.handleSortChange}>
                        <option value=''>Show All</option>
                        <option value='ascending'>Ascending</option>
                        <option value='descending'>Descending</option>
                    </select>
                </div>
            </div>
        )
    }
}
