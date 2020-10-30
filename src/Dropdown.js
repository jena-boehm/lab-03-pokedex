import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown-section">
                <div className="category-dropdown">
                    <select onChange={this.props.handleCategoryChange} className="dropdown">
                        <option value=''>Show All</option>
                        <option value='pokemon'>Name</option>
                        <option value='type_1'>Type 1</option>
                        <option value='type_2'>Type 2</option>
                        <option value='ability_1'>Ability</option>
                        <option value='attack'>Attack</option>
                    </select>
                </div>
                <div className="sort-dropdown">
                    <select onChange={this.props.handleOrderChange} className="dropdown">
                        <option value=''>Show All</option>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>
            </div>
        )
    }
}
