import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Hobbies from './Hobbies';
import Me from './Me';
import Nav from './Nav';
import Contact from './Contact';

function App () {


    
    return (

    <BrowserRouter>

      <div className="App">
        <Nav/>
        <Route path="/" exact>
          <Me/>
        </Route>
        <Route path="/hobbies" exact>
          <Hobbies/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
    
  

      </div>
      </BrowserRouter>
    );
  }
  



export default App;
