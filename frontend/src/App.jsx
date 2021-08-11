import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/Products/Product/ProductDetail/ProductDetail';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import SignIn from './components/Signin/Signin';
import useStyles from './styles';

function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>

      <div>
        <Navbar />
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/product/:id" exact>
            <ProductDetail />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/shipping" exact>
            <Shipping />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
