
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="body">

     
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/Shop">
          <Shop></Shop>
          </Route>
          <Route exact path="/OrderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
