
import React from 'react';
import Footer from "./Footer";
import NavBar from './NavBar';

function DashBoard() {
  return (
  
    <div>
  <NavBar/>
    <div><h3>RENT MANAGEMENT DASHBOARD</h3></div>
    
    
  
  <div className="heroText">
  <h2>Rent Management APP</h2><hr/>
  <p>You are welcome to rent management App. 
  We provide you access to vacant rooms within your locality.
  Hit on the signup link to register as a new user.
   If you are an old user you can login to access our services</p>
   
 

  </div>
  
  <Footer/>
  </div>

  )
}

export default DashBoard
