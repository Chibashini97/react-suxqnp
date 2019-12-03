import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import './style.css';
import MainPage from './MainPage.js';


class App extends Component {
 
  render() {
    return (
      <div>
       <MainPage/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
