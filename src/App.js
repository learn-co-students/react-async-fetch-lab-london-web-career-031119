import React, { Component } from "react";
class App extends Component {
  state = {
    number: null,
    people: []
  };

  displayData = object => {
    this.setState({ number: object["number"], people: object["people"] });
  };

  componentDidMount() {
    return fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => this.displayData(data));
  }

  render() {
    return (
      <div>
        <p>{this.state.number} people in space</p>
      </div>
    );
  }
}

export default App;
