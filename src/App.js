import React, { Component } from 'react';

import Search from './Search/Search';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  state={
    items:[],
    error: null,
    printTypeFilter: '',
    bookTypeFilter: ''
  }
  // filterState=()=>{
  // }
  apiHandler = (userInput, filter, printType) => {
    console.log(userInput);
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    const newInput = encodeURIComponent(userInput);
    const key = 'AIzaSyA3UIsSPkNxyAoEtMa2EQ_DdHwxfsFysw8';
    let filterin='';
    if(filter!=='all'){
      filterin=`&filter=${filter}`
    }
    const options = {
      method: 'GET',
    }
    fetch(url+newInput+filterin+'&printType='+printType+'&key='+key, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let newBooks=data.items
        .map(a=>{
          a.show=false
          return a
        }
        )
        // console.log(data)
        this.setState({
          items: newBooks,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
  handleToggle= (id)=>{
    const items = [...this.state.items];
    const item =items.find(x=>x.id===id);
    item.show = !item.show
    this.setState({
      items:items
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Google Book Search</h1>
        <Search apiHandler={this.apiHandler} />
        <ResultsList books={this.state.items} 
        handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
