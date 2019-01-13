import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: "Wilfried", "age": 12, "id": 1 },
      { name: "Noel", "age": 452, "id": 2 },
      { name: "Jean", "age": 14, "id": 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
       <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja }/>
       <AddNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;
