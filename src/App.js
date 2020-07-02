import React from 'react';
import { BrowserRouter as Router,
          Switch,
          Route,
        } from 'react-router-dom';
import Home from './views/Home';
import SimpleList from './views/SimpleList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/simple-list'>
          <SimpleList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
