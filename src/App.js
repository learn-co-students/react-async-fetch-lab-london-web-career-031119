// create your App component here
import React, { Component } from 'react';

class App extends Component {
    state = { 
        people: []
     }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => setState({people: data.people}))
    }

    render() { 
        return ( <div>People in space</div> );
    }
}
 
export default App;
