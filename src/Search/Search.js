import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-main">
                <form className="search-form" 
                onSubmit={event=>{
                    event.preventDefault();
                    this.props.apiHandler(event.target.search.value)
                }}>
                    <label htmlFor="search">Search: </label>
                    <input type="text" name="search" id="search"></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}