import React from 'react'
import hfd from '../imgs/hfd.jpeg'
import hyu from '../imgs/hyu.jpeg'
import rin from '../imgs/rin.jpeg'
import NavBar from '../components/NavBar'
<imgs/>
function Singleroom() {
  return (
    <div><NavBar/>
<div><h1>Singleroom</h1></div>

    <div className='firstrow'>
    <div className='card'>
     <img src={hfd} alt="" />
    <p>it has, bathroom</p>
    <p>location:zongo</p>
    <p>number of rooms 1</p>
    <div>email:yenkopeter7@gmail.com</div>
    <div>contact:0207481917</div>
    <button>contact owner</button>
    </div>
    
    
    <div className='card'>
    <img src={hyu} alt="" />
    <p>it have bathroom, toilet </p>
    <p>location:zongo</p>
    <p>number of rooms 1</p>
    <div>contact:0207467785</div>
    <div>email:yenkoper7@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    
    
    <div className='card'>
    <img src={rin} alt="" />
    <p>it have  bathroom, toilet  </p>
    <p>location:zongo</p>
    <p>number of rooms 9</p>
    <div>contact:0594578634</div>
    <div>email:yenkopeter7@gmail.com</div>
    <button>contact owner</button>
    </div>
   
    </div>
    </div>
    
    
  )
}

export default Singleroom
