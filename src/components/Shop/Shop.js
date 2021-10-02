import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
const Shop = () => {
    const [products,setProducts] = useState([])
    
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect( ()=>{
       fetch('./products.JSON')
       .then(response => response.json())
       .then(data =>{ 
           
        setProducts(data)
       setDisplayProducts(data)
       })

    } ,[])
//for local storage
    useEffect(() =>{
      if(products.length){
        const savedCart = getStoredCart()
        const storedCart = []; 
        for (const key in savedCart) {
            console.log(key)
            const addedProduct = products.find( product =>product.key === key);
            if (addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct)
            }
        
        }
        setCart(storedCart)
      }
       
    },[products])

    const handleAddToCart = (product) =>{
         const newCart =[...cart, product]
         setCart(newCart);
         //save to local storage
         addToDb(product.key);
    }
    const handleSearch = event => {
   const searchText = event.target.value;
    const matchedProduct = products.filter(product  =>product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(matchedProduct)
    console.log(matchedProduct.length)

    }

    return (
        <>
        <form className="d-flex my-5 w-50 mx-auto">
        <input  className="form-control me-2" type="search" onChange={handleSearch} placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline nav-btn text-white s-btn" type="submit" >Search</button>
      </form>
        <div className="shop-container">
            <div className="product-container">
           
             {
                displayProducts.map(product =><Product 
                    key = {product.key}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                 ></Product>)
             }
            </div>
            <div className="cart-container my-5">
           <Cart cart={cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;