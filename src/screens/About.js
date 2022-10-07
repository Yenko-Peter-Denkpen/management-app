import React from 'react'
import NavBar from '../components/NavBar';
import cfg from '../imgs/cfg.jpeg';
import pete from '../imgs/pete.jpeg'




function About() {
  return (
    <div>

<NavBar/>

<h1>this app shows vacant houses, it location, category and price </h1>
<p>it was created to help people in getting houses to rent when ever thier are in need
and to help landlord in uploading their vacant houses for rent</p>
<p>one should be able to signin as a new user and login as an old user for you to be able to choose your choice of house</p>

<div className='card'>
<img src={cfg} alt="" />

</div>
<div className='card'>
<img src={pete} alt="" />
</div>
</div>
   
  )
}

export default About
