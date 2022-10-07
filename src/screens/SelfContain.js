import React from 'react'
import  adin from '../imgs/adin.jpeg'
import hyu from '../imgs/hyu.jpeg'
import taf from '../imgs/taf.jpeg'
import NavBar from '../components/NavBar'
<imgs/>
function SelfContain() {
  return (
    <div><NavBar/>
    <div><h1>SelfContain</h1></div>

    <div className='firstrow'>
    <div className='card'>
    <img src={adin} alt="" />
    <p>this house has 10 rooms, bathroom, kicthen,toilet and garage</p>
    <p>location:wa new market</p>
    <p>number of rooms:10</p>
  <div>contact:0557661240</div>
    <div>email:asaa3@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    <div>
    <div className='card'>
   <img src={hyu} alt="" />
    <p>this house  has kicthen,toilet and garage</p>
    <p>location:wa new market</p>
    <p>number of rooms:11</p>
    <div>contact:0553661240</div>
    <div>email:asana3@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    <div>
    <div className='card'>
   <img src={taf} alt="" />
    <p>this house has 9 rooms, bathroom, kicthen,toilet and garage</p>
    <p>location:  nakore</p>
    <p>number of rooms:9</p>
   <div>contact:0243661209</div>
    <div>email:uyana3@gmail.com</div>
    <button>contact owner</button>
    </div>
    </div>
    
 </div>
    </div>
    </div>
    
  
    
  )
}

export default SelfContain
