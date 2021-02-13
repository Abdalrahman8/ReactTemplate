import './App.css';
import react , {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Import List

import Navbar from './components/Nav';
import Contact from './components/Contact';
import Index from './components/Index'; 


class App extends Component {
  render () {
      return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index} />
        <Route path="/Contact" component={Contact} />

      </BrowserRouter>
    );
  }
}


export default App;
