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
import UserPage from './components/UserPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" Component={HomePage}></Route>
          <Route exact path="/dashboard" Component={Dashboard}></Route>
          <Route exact path="/user/:username" Component={UserPage}></Route>

        </Routes>
      </div>
    </Router>
  );
};

export default App;