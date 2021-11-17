import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import img from '../images/google.png'
const Register = () => {
    return (
        <div className="login">
            <div className=" border  p-4 my-5 py-5 ">
            <h3 className="mb-4 fw-bold">Creat Account</h3>
                <form onSubmit="">
     <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="text" class="form-control"  aria-describedby=""/><br/>
     <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  <br/>
                    <input className="button mt-2 w-100" type="submit" value="Creat your ema-john account" />
                </form>
                <p className="my-3">Already Have An Account? <Link to="/login">  Log In</Link></p>
             <button className="button w-100 "><i class="fab fa-google"></i> Sign In with Google</button>
            </div>
        </div>
    );
};

export default Register;