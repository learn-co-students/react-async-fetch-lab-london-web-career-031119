// create your App component here
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

const URL = 'http://api.open-notify.org/astros.json'

class App extends Component {
   state = {
      PeopleInSpace: []
   }

   getStuff() {
      fetch(URL)
         .then(r => r.json())
         .then(data => this.setState({ PeopleInSpace: data.people }))
         .catch(error => alert(error))
   }

   componentDidMount() {
      this.getStuff()
   }

   render() {
      return (
         <React.Fragment>
            {this.state.PeopleInSpace.map(person =>
               <Card>
                  <Card.Content header={person.name} />
                  <Card.Content description={person.craft} />
               </Card>
            )}
         </React.Fragment>
      );
   }
}

export default App;