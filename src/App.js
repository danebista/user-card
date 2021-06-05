import React, {Component} from 'react';
import './App.css';
import './components/cardlist.component'
import { CardList } from './components/cardlist.component';
import {SearchBox} from './components/searchbox.component';

class App extends Component{
  constructor(){
    super();

    this.state = { 
      cardHolder: [] ,
      searchCard: ''
    
    }
  }

  componentDidMount(){
     fetch('https://reqres.in/api/users')
    .then(response =>response.json())
    .then(userData => this.setState({ cardHolder: userData.data }))
  }
 
  handleChange=e=> this.setState({searchCard:e.target.value});

  render(){
    
    const { cardHolder, searchCard } = this.state;
    
    const filteredNames =  cardHolder.filter((card)=>{
      return card.first_name.toLowerCase().includes(searchCard.toLowerCase()) 
      || card.last_name.toLowerCase().includes(searchCard.toLowerCase())
    })

    return(
    <div className = "App">
      <SearchBox 
      placeholder = "Search Name"
      handleChange = {this.handleChange} />
      
      <CardList cardData={filteredNames} /> 
    </div>
    )
  }
}

export default App;
