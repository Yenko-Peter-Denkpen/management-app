import React from 'react';


import adin from '../imgs/adin.jpeg';
import hfd from  '../imgs/hfd.jpeg';
import inv from '../imgs/inv.jpeg';
import din from '../imgs/din.jpeg';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';




function Category() {
  return (
    <div>
    <NavBar/>
<h1>click on any to see your desired room</h1>
<div className='firstrow' >

      
<div className='card' >
<h2>selfcontain</h2>
<img src={adin} alt="" />
<p>this house contain 6 rooms, bathroom, kicthen,toilet and garage </p>
<p>GHC4500 1yr</p>
<button><Link to='/selfcontain'>click to see more</Link></button>
</div>


<div className='card'>
<h2> singleroom</h2>
<img src={hfd} alt="" />
<p>it has   kicthen and toilet</p>
<p>GHC3000 1yr</p>
<button><Link to='/singleroom'>click to see more</Link></button>
</div>

<div className='card'>
<h2>compound house</h2>
<img src={inv} alt="" />
<p> a single room with bathroom and toilet</p>
<p>GHC780 1yr</p>
<button><Link to='/compoundhouse'>click to see more</Link></button>
</div>

<div className='card'>
<h2>bungalow</h2>
<img src={din} alt="" />
<p>it have 5rooms, hall, kicthen,
bathroom, toilet and a swiming pool</p>
<p>GHC5000</p>
<button><Link to='/bungalow'>click to see more</Link></button>
</div>
</div>


</div>
    
    
  )
}

export default Category