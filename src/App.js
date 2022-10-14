import { Component } from 'react'

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      name: {firstName:'Erick', lastName:'Silva'}
    }
  }
  render() {
    return (
      <div className="App">
        <p>
          Name: {this.state.name.firstName} {this.state.name.lastName}
        </p>
        <button 
          onClick={() => {
            this.setState(
              ()=>{
                return {
                  name: {firstName:'Evelyn', lastName:'Fernandes'},
                };
              },
            );
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
