import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-main">
                <form className="search-form" 
                onSubmit={event=>{
                    event.preventDefault();
                    const search = event.target.search.value
                    const printType = event.target.printType.value
                    const bookType = event.target.bookType.value
                    this.props.apiHandler(search, bookType, printType)
                }}>
                    <label htmlFor="search">Search: </label>
                    <input type="text" name="search" id="search"></input>
                    <button type="submit">Search</button>

                    <label htmlFor="printType">Print Type</label>
                    <select name="printType" id="printType">
                        <option value="all" defaultValue>All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="bookType">Book Type</label>
                    <select name="bookType" id="bookType">
                        <option value="all" defaultValue>No Filter</option>
                        <option value="ebooks">ebooks</option>
                        <option value="free-ebooks">free-ebooks</option>
                        <option value="full">full</option>
                        <option value="paid-ebooks">paid-ebooks</option>
                        <option value="partial">partial</option>
                    </select>
                </form>
            </div>
        )
    }
}