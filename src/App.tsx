import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';
import Saved from './Saved';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Route path='/search' component={Search}/>
          <Route path='/saved' component={Saved}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
