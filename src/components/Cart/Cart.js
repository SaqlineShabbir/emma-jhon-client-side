import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
  const fontawesome = <FontAwesomeIcon icon={faMoneyBill} />
  const {cart} = props;
  

let totalQuantity = 0
let total = 0;
for(const product of cart){
  if (!product.quantity){
    product.quantity = 1;
  }
  total = total + product.price * product.quantity;
  totalQuantity = totalQuantity + product.quantity;
}
let shipping=0
for(const product of cart){
  shipping = shipping + product.shipping;
  
}
const grandTotal = total+shipping;
    return (
        <div className="card">
            <div className="card border mb-3">
  <div className="card-header button border text-black text-center fs-4 ">Order Summary</div>
  <div className="card-body ">
  
    <h5 className="card-title">Items selected - {cart.length}</h5>
    <p className="card-text">price - {total.toFixed(2)}</p>
    <p className="card-text">Shipping And Handling - {shipping.toFixed(2)}</p> 
    <p className="card-text">Items- </p>
    <h5 className="card-title">Items Orderd Quantity - {totalQuantity}</h5>
    <p className="card-text">Items-</p>
    <h5>Total - {grandTotal.toFixed(2)}</h5>
  </div>

  {/* <button className="card-footer text-center button  border"> {fontawesome} Purchase
  </button> */}
     {props.children}
</div>
</div>
    );
};

export default Cart;