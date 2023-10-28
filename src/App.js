import { useState } from 'react';
import './App.css';
import { cart1, cart2 } from './data';
import {Cart} from "./Cart"

function App() {
  const [cartA, setCartA] = useState(cart1)
  const [cartB, setCartB] = useState(cart2)

  const Swaap = () => {
    const newCartA = [... cartA]
    const newCartB = [... cartB]
  
    for ( let i=0; i < cartA.length; i+=2) {
      newCartA[i] = cartB[i] 
      newCartB[i] = cartA[i] 
      
    }
    setCartA(newCartA)
    setCartB(newCartB)
  }


  return (
    <div className="page flex">
      <div className='flex container'>
        <Cart items={cartA} cartNumber={1}/>
        <button className='btn' onClick={Swaap}>Swap Odds</button>
        <Cart items={cartB} cartNumber={2}/>
      </div>
    </div>
  );
}

export default App;
