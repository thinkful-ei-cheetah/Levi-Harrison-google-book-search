import React from 'react';

import Book from './Book';

export default class ResultsList extends React.Component {
    render() {
        return (
            <div className="results-list">Results List
                <ul>
                    <Book />
                    <Book />
                    <Book />
                </ul>
            </div>
        )
    }
}