import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import ExercisesList from '../modules/excercise/ListExercise';
import EditExercise from '../modules/excercise/EditExercise';
import CreateExercise from '../modules/excercise/CreateExercise';
import CreateUser from '../modules/user/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
