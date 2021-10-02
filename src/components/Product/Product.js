import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
const Product = (props) => {
  const fontawesome = <FontAwesomeIcon icon={faShoppingCart} />
  
  const{name,img,price,seller,stock,shipping,star} = props.product
    return (
        <div className="product my-5">
 <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <h5>$ {price}</h5>
        <p className="card-text"><small ></small>Shipping Charge - {shipping}</p>
        <p className="card-text"><small className="text-muted"></small>Only {stock} Left In Stock</p>
        <p className="card-text"><small ></small>Product Seller - {seller}</p>
        <Rating className="my-2 text-warning"
        initialRating ={star}
        emptySymbol ="far fa-star"
        fullSymbol ="fas fa-star"
         readonly></Rating> <br/>
        <button onClick={()=>props.handleAddToCart(props.product)} className="button">{fontawesome} Add To Cart</button>
        
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Product;