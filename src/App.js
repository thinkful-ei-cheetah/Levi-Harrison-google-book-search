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
    const userInput='henry'
    const key = 'AIzaSyA3UIsSPkNxyAoEtMa2EQ_DdHwxfsFysw8';
    const options = {
      method: 'GET',
    }
    fetch(url+userInput+key, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
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
