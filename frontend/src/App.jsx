import logo from './logo.svg';
import './App.css';
import useStyles from './styles'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductDetail from './components/Products/Product/ProductDetail/ProductDetail';

function App() {
  const classes = useStyles()
  return (
    <BrowserRouter>

      <div>
        <Navbar />
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/product/:id" exact>
            <ProductDetail />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
