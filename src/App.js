
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Purchase from './components/Purchase/Purchase';
import LogIn from './components/LogIn/LogIn';
import Register from './Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRout from './components/PrivateRout/PrivateRout';
import Shipping from './Shipping/Shipping';
import Orders from './components/Orders/Orders';
function App() {
  return (
    <div className="body">

     <AuthProvider>

     <Router>
       
       <Header></Header>
       
         <Switch>
         <Route exact path="/"> 
              <Shop></Shop> 
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
           <PrivateRout exact path="/purchase">
              <Purchase></Purchase>
           </PrivateRout>
           <PrivateRout exact path="/orders">
              <Orders></Orders>
           </PrivateRout>
           <PrivateRout exact path="/shipping">
              <Shipping></Shipping>
           </PrivateRout>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
           <Route exact path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>

     </AuthProvider>

      
    </div>
  );
}

export default App;
