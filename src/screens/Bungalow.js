import React from 'react'
import din from '../imgs/din.jpeg'
import pete from '../imgs/pete.jpeg'
import rau from  '../imgs/rau.webp'
import NavBar from '../components/NavBar'
<imgs />
function Bungalow() {
  return (
    <div><NavBar/>
    <div><h1>Bungolow</h1>


    <div className='firstrow'>
    <div className='card'>
    <img src={din} alt="" />
    <p>this house contain 12 rooms, bathroom, kicthen,toilet and garage</p>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    <button>contact owner</button>

    </div>
    
    
    <div className='card'>
    <img src={pete} alt="" />
    <p>this house contain 10 rooms, bathroom, kicthen,toilet and garage</p>
    <div>contact:0241684456</div>
    <div>email:asdjhgf12@gmail.com</div>
    <button>contact owner</button>

    </div>
   
    <div>
    <div className='card'>
    <img src={rau} alt="" />
    <p>this house contain 9 rooms, bathroom, kicthen,toilet and garage</p>
           <div>phone:0241684456</div>  
            <div>email:asdjhgf12@gmail.com</div>
            <button>contact owner</button>
          
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Bungalow
