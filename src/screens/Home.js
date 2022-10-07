import React from 'react'
import NavBar from '../components/NavBar'
import cfg from '../imgs/cfg.jpeg';
import adin from '../imgs/adin.jpeg';
import pete from '../imgs/pete.jpeg';
import uys from '../imgs/uys.jpeg';



function Home() {
  return (
    <div>
    <NavBar/>


    
<h1>welcome to your solutions in house renting,</h1> 
  <h3> an app where you can get all types of your preferd houses with it location, prices and landlord contact</h3>
<div className='firstrow'>

      
<div className='card'>
<h2>bungalow</h2>
<img src={cfg} alt="" />

</div>


<div className='card'>
<h2>self contain</h2>
<img src={adin} alt="" />

</div>

<div className='card'>
<h2>compound house</h2>
<img src={pete} alt="" />
</div>

<div className='card'>
<h2>singleroom</h2>
<img src={uys} alt="" />
</div>



</div>
</div>

    
    
    
  )
}

export default Home