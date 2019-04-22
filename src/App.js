import React, { Component } from 'react';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  state={
    items:[
      // {
      // title:'',
      // author:[],
      // price:'',
      // description:'',
      // image:'',
      // id:'',
      // }
    ],
    error: null,
    printTypeFilter: '',
    bookTypeFilter: ''
  }
  // filterState=()=>{
  // }
  apiHandler = (userInput) => {
    console.log(userInput);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const newInput = encodeURIComponent(userInput);
    const key = 'AIzaSyA3UIsSPkNxyAoEtMa2EQ_DdHwxfsFysw8';
    const options = {
      method: 'GET',
    }
    fetch(url+newInput+'&key='+key, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          items: data.items,
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
        <Search apiHandler={this.apiHandler} />
        <Filter />
        <ResultsList />
      </div>
    );
  }
}

export default App;
