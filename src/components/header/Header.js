import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/UseFirebase';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
  const {user,logOut} = useAuth();
    return (
      <>
         <header className="header" > 

<nav className="navbar navbar-expand-lg navbar-light my-bg navbar  ">
  <div className="container-fluid header-logo ">
    <a className="navbar-brand " href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent nav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto text-white nav-ul">
        <li className="nav-item">
          <NavLink className="nav-link active text-white" aria-current="page" to="/Shop">SHOP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-5"  to="/OrderReview">Order Review</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-5" to="/Inventory">Manage Inventory Here</NavLink>
        </li>
       
        {
      user.email ?
       <button onClick={logOut}><i className="fas fa-user"> </i> Log Out</button>
      
       :
        <li className="nav-item">
          <NavLink className="nav-link text-white mx-5" to="/login">Log In</NavLink>
        </li>
       }
        
      </ul>
      
    </div>
  </div>
</nav>






        </header>
        </>
    );
};

export default Header;