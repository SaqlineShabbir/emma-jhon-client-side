import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products,setProducts] = useState([])
    //pagination
    const [pageCount, setPageCount] = useState(0)
     const [page, setPage] = useState(0)
      const size = 10;
      //.......
    const [cart, setCart] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect( ()=>{
       fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
       .then(response => response.json())
       .then(data =>{ 
           
        setProducts(data.products)
       setDisplayProducts(data.products)
       const count = data.count;
       const pageNumber = Math.ceil(count /size);
       setPageCount(pageNumber)
       })

    } ,[page])
//for local storage
    useEffect(() =>{
        const savedCart = getStoredCart()
        console.log(savedCart)
           const keys = Object.keys(savedCart)
           fetch('http://localhost:5000/products/byKeys', {
               method: 'POST',
               headers:{
                   'content-type': 'application/json'
               },
               body:JSON.stringify(keys)
           })
           .then(response => response.json())
           .then(products => {
               console.log(products)


                     if(products.length){
       
        const storedCart = []; 
        for (const key in savedCart) {
            
            const addedProduct = products.find( product =>product.key === key);
            if (addedProduct){
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct)
            }
        
        }
        setCart(storedCart)
      }
           })


       
    },[])

    const handleAddToCart = (product) =>{
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity +1;
            newCart = [...rest,product]

        }
        else{
            product.quantity = 1
            newCart = [...cart, product]
        }
         
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
             <div className="pagination">
                 {
                     [...Array(pageCount).keys()].map(number =><button className={number === page ? 'selected' : ''} key={number} onClick={()=> setPage(number)}>{number+1}</button>)
                 }
             </div>
            </div>
            <div className="cart-container my-5">
           <Cart cart={cart}>
              <Link className="mx-auto" to= "/OrderReview"><button className="button ">Order Review</button></Link>
              
           </Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;