import React, { Component } from 'react';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search />
        <Filter />
        <ResultsList />
      </div>
    );
  }
}

export default App;
