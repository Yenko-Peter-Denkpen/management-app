import { useState, useContext,useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
 import {AuthContext}from "../context/auth.context"

function Register() {
  const navigate = useNavigate();
   const {success, authRegister}=useContext(AuthContext);

  const [username, setUsername]=useState("")
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 useEffect(()=>{
  if(success){
    navigate("/home");
   }
 },
 [success]);

const handleSubmit =(e)=>{
  e.preventDefault();
 authRegister(username,email, password)
};

    return (
      <form onSubmit={handleSubmit} className='form'>
      <div className='col - sm 12 col-md-6 col-ig-4 col-x1-4 m-3 p-3 bg-warning'>
      <div className='form-group m-2'>
      <label htmlFor="username">username</label>
      <input type="text" className='form-control' placeholder="Enter username"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div className='form-group m-2'>
      <label htmlFor="email">email</label>
      <input type="email" className='form-control' placeholder="Enter email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className='form-group m-2'>
      <label htmlFor="password">password</label>
      <input type="password" className='form-control' placeholder="Enter password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}/>
      </div>
       <button type='submit' className='btn btn-info m-2' m-2>
       <Link to="/home">Register</Link>
       </button>
      <div className='row'>
      <p>i already have an account</p>
      <Link to="/" className='nav-link'>login</Link>
      </div>
      </div>
      </form>
    );
  }

export default Register