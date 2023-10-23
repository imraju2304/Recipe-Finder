import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={RecipeSearch} />
        <Route path="/recipe/:id" component={RecipeDetails} />
      </Switch>
    </Router>
  );
}

export default App;
