import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
            <label>Print Type</label>
            <select>
                <option value="all">All</option>
                <option value="book">Book</option>
                <option value="magazine">Magazine</option>
            </select>
            <label>Book Type</label>
            <select>
                <option value="no-filter">No Filter</option>
            </select>
            </div>
        )
    }
}