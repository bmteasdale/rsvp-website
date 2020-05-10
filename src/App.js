import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import RSVPForm from './components/RSVPForms/RSVPForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/index.html" component={Home} />
        <Route exact path="/RSVP" component={RSVPForm} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
