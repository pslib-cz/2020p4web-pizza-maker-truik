import './App.css';
import React from 'react';
import Nav from './components/nav.jsx';
import Error from './pages/error.jsx';
import Home from './pages/home.jsx';
import Calzone from './pages/calzone.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ingredience from './pages/ingredience.jsx';
import Pizza from './pages/pizza.jsx';
import IngredienceProvider from './components/ingredienceProvider.jsx';
import {createBrowserHistory} from 'history';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <IngredienceProvider>
        <Router history={history}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/order/pizza' component={Pizza} />
            <Route path='/order/calzone' component={Calzone} />
            <Route path='/ingredients' component={ingredience} />
            <Route component={Error} />
          </Switch>
        </Router>
      </IngredienceProvider>
    </div>
  );
}

export default App;
