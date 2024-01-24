import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// <Switch> component has been deprecated and replaced with the <Routes> component.
// <Route exact path="/" component={Home} /> 
// https://www.w3schools.com/react/react_router.asp

import './App.scss';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route exact path="/" Component={HomePage}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;