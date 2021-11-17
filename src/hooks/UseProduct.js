import { useEffect, useState } from "react"

const useProducts = () =>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data =>setProducts(data.products)) 
    },[])
    return [products];
  
}
export default useProducts;