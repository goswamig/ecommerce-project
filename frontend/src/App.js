import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Order from './components/Order';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-product" component={AddProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order" component={Order} />
          <Route path="/products" component={ProductList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

