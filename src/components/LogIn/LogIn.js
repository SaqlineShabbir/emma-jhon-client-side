import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/UseFirebase';

const LogIn = () => {
    const { signInUsingGoogle,setIsLoading} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'


    const handleGoogleLogIn = () => {
      signInUsingGoogle()
      .then((result) => {
        
        console.log(result.user);
         history.push(redirect_uri)

       })
       .finally( () => {
         setIsLoading(false)
       })
    }
    return (
        <div className="login">
            <div className="border  p-4 my-5 py-5  login-second">
                <h3 className="mb-4 fw-bold">Log In</h3>
                <form >
     <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  <br/>
                    <input className="button mt-2 w-100" type="submit" value="Log In" />
                </form>
                <p className="my-3">New To Ema-John? <Link to="/register">  Creat Account</Link></p>
             <button onClick={handleGoogleLogIn} className="button w-100 "><i class="fab fa-google"></i> Sign In with Google</button>

             
            </div>
        </div>
    );
};

export default LogIn;
