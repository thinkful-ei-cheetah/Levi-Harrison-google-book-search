import React, { Component } from 'react';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  state={
    items:[{
      title:'',
      author:[],
      price:'',
      description:'',
      image:'',
      id:''
    }]
  }
  // filterState=()=>{
  // }
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const key = 'AIzaSyA3UIsSPkNxyAoEtMa2EQ_DdHwxfsFysw8';
    const options = {
      method: 'GET',
    }};
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
