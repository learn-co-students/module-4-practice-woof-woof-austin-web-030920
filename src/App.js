import React from 'react';
import './App.css';
import Dog from './Dog'
import Deets from './Deets'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allPups: [],
      featuredPupper: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pups").then(r => r.json()).then(pups => this.setState({allPups: pups}))
  } 

  goDoggo = () => {
    return this.state.allPups.map(pupper => <Dog key={pupper.id} dogInfo={pupper} handleClick={this.showInfo}/> );
  }

  showInfo = (chosenBoy) => {
   this.setState({featuredPupper: chosenBoy})
  }

  dogStatus = (id, status) => {
    let newStatus = !status
    this.setState({featuredPupper: {
      ...this.state.featuredPupper,
      isGoodDog: newStatus
    }});
    
    fetch(`http://localhost:3000/pups/${id}`, {
      method: 'PATCH',
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({isGoodDog: newStatus})
    }).then(r => r.json()).then(json => console.log(json))
 
  }

render() { 
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {this.goDoggo()}
       
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <Deets bestBoy={this.state.featuredPupper} handleClick={this.dogStatus}/>
        </div>
      </div>
    </div>
  )
}}

export default App;
