import React from 'react';
import useProducts from '../../hooks/UseProduct';
import useCart from '../../hooks/UseCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
const OrderReview = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart()
    const history = useHistory()

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !==key);
       setCart(newCart)
       deleteFromDb(key)
    }

    const  handlePurchase =()=>{
       history.push('/shipping');
       setCart([]);
       clearTheCart()
    }
    return (
        <div className="shop-container">
            <div className="product-container">
           
            {
              cart.map(product => <ReviewItem key={product.key}
                 product={product}
                 handleRemove={handleRemove}
                 ></ReviewItem>)
          }
            
            </div>
            <div className="cart-container my-5">
            
           
            <Cart cart={cart}>
                <button onClick={handlePurchase} type="button" className="button"><i className="fas fa-shopping-bag"></i> Purchase</button>
            </Cart>
            </div>
        </div>
    );
};

export default OrderReview;