import React, { useState, useEffect } from 'react';
// import { link } from 'fs';

function App(props) {
  const [spacemen, setSpacemen] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading) {
      fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => setSpacemen(data.people));
      setLoading(false);
    };
  });

  return (
    <div className="people-in-space-container">
      <ul className="list">
        {spacemen && spacemen.map(spaceman => <li key={spaceman.name} className="spaceman">{spaceman.name}</li>) }
      </ul>
    </div>
  );
};

export default App;