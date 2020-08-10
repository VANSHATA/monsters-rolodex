


import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search/search-box';




 class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      monsters:  [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

 

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users =>this.setState({monsters:users}));
}

// class methods
 handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}

  render() {
    const {monsters,searchField} = this.state;
    // const monsters = this.state.monsters;const searchField= this.state.searchField
    const filteredMonsters = monsters.filter(monster =>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
       {/* <CardList monsters={this.state.monsters} /> */}
       <SearchBox
        placeholder="search monsters"
        handleChange={this.handleChange} />
       <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App



