// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(({people}) => this.setState({ peopleInSpace: people }))
    // .then(x => this.setState({pets: x }))

}




  render() {
    return (
      <div className="card">
      {console.log(this.state.peopleInSpace)}
              {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    );
  }
}

export default App;