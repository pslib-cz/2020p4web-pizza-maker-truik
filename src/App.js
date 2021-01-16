import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from "./pages/home";
import Nav from "./components/nav";
import Ingredients from "./pages/ingredients";
import Pizza from "./pages/pizza";
import Calzone from "./pages/calzone";
import Error from "./pages/error"
import IngredienceProvider from './components/ingredienceProvider';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Nav />
        <br />
        <IngredienceProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/order/pizza" exact component={Pizza} />
            <Route path="/order/calzone" exact component={Calzone} />
            <Route path="/ingredients" exact component={Ingredients} />
            <Route component={Error} />
          </Switch>
        </IngredienceProvider>
      </Router>
    </div>
  );
}

export default App;
