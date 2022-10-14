import { Component } from 'react'

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: 'Erick'
    }
  }
  render() {
    return (
      <div className="App">
        <p>Name: {this.state.name}</p>
        <button>Change Name</button>
      </div>
    );
  }
}

export default App;
