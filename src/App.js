import React, { Component } from "react";

class App extends Component {
  state = {};

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(resp => this.setState({ astros: resp.people }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ul>
          {this.state.astros &&
            this.state.astros.map((astro, index) => (
              <li key={index}>
                {astro.craft} - {astro.name}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
