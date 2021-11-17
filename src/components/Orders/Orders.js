import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] =useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setOrders(data)})
    },[])
    return (
        <div>
            <h2>This Orders page {orders.length}</h2>
         {
             orders.map(order =>  <div className="product my-5">
             <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={order.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{order.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h5>$ {order.price}</h5>
                    <p className="card-text"><small ></small>Shipping Charge - {order.shipping}</p>
                    <p className="card-text"><small className="text-muted"></small>Only {order.stock} Left In Stock</p>

                    
                    
                  </div>
                </div>
              </div>
            </div>
                        
                    </div>)
         }
        </div>
    );
};

export default Orders;