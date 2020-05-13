import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

function App() {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  if (true) { /* HERE */
    style.backgroundColor = 'red';
  }

  const classes = [];
  if (personState.persons.length <= 3) {
    classes.push('red');
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes}>This is really working!</p>
      <button style={style} onClick={switchNameHandler.bind(this, 'Maximilian!')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        click={switchNameHandler.bind(this, 'Maxi!')}
        changed={nameChangedHandler} />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age} />
    </div>
  );
}

export default App;

