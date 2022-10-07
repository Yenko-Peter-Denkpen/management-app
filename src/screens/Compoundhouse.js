import React from 'react'
import  uys from '../imgs/uys.jpeg'
import mou from '../imgs/mou.jpeg'
import inv from '../imgs/inv.jpeg'
import NavBar from '../components/NavBar'


<imgs/>
function Compoundhouse() {
  return (
    <div><NavBar/>
    
    <div><h1>compoundhouses</h1></div>

    <div className='firstrow'>
    <div className='card'>
   <img src={uys} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 16</p>
    <p>location:charia rood</p>
    <div>contact:0204338483</div>
    <div>email:waduj@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    
    
    <div className='card'>
   <img src={mou} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 10</p>
    <p>location:chahaa rood</p>
    <div>contact:0553661240</div>
    <div>email:denkpen444@gmail.com</div>
    <button>contact owner</button>
    </div>
    
    
    
    <div className='card'>
    <img src={inv} alt="" />
    <p> a single room with bathroom and toilet</p>
    <p>number of rooms 24</p>
    <p>location:near dobile lowcoast</p>
    <div>contact:0204322483</div>
    <div>email:gandaare@gmail.com</div>
    <button>contact owner</button>
   
    </div>
    
    
   
    </div>
    </div>
  )
}

export default Compoundhouse
