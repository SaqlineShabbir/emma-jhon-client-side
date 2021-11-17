import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from '../hooks/useAuth'
import { clearTheCart, getStoredCart } from '../utilities/fakedb';
const Shipping = () => {
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const onSubmit = data => {
    
      const savedCart = getStoredCart();
      data.order = savedCart;
      console.log(data)
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result =>{
       if(result.insertedId){
         alert('Order Processed Successfully');
         clearTheCart()
         reset()
       }
      })
  }
  const {user} = useAuth()
    return (
      
        <div className="shipping-form">
             <form  onSubmit={handleSubmit(onSubmit)}>
         <h5>Give Us Your Details</h5>
      <input defaultValue={user.displayName} placeholder="name" {...register("name")} />
      
    
      <input defaultValue={user.email} placeholder="email" {...register("email", { required: true })} />
     
      {errors.email && <span className="error">This field is required</span>}

      <input defaultValue="" placeholder="Phone Number" {...register("phone")} />

      <input defaultValue="address" placeholder="Address" {...register("address")} />
      
      <input className='button' type="submit" />
    </form>
        </div>
    );
};

export default Shipping;