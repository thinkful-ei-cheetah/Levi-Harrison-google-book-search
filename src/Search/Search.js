import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-main">
                <form className="search-form">
                    <label htmlFor="user-search">Search: </label>
                    <input type="text" name="user-search" id="user-search"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}