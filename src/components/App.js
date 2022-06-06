import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import './App.css';
import Routing from './Routing';


class App extends Component {

  render() {

    return (
      <div>
        <Routing>
        </Routing>
      </div>
    );
  }
}

export default App;