import React, { Component } from 'react';
// import { link } from 'fs';

class App extends Component {

  state = {
    spacemen: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState( { spacemen: data.people} ));
  };

  render() {
    const { spacemen } = this.state;
    return (
      <div className="people-in-space-container">
        <ul className="list">
          {spacemen && spacemen.map(spaceman => <li key={spaceman.name} className="spaceman">{spaceman.name}</li>) }
        </ul>
      </div>
    );
  };

};

export default App;