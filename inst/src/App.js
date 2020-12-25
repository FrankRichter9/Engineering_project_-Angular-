// import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Context} from './components/context';
import Login from './components/Login';
import INST from './components/INST';


function App() {

  
  const Login = false;

  const UpdateLogin = () =>{
    this.Login = !this.Login;
    console.log('login updated');
  }

  return (
   <INST />
    
  );
}

export default App;
