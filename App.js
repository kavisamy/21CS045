import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" extra component={ProductsPage} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;

