import { useState } from 'react';
import './App.css';
import { cart1, cart2 } from './data';
import {Cart} from "./Cart"

function App() {
  const [cartA, setCartA] = useState(cart1)
  const [cartB, setCartB] = useState(cart2)


  return (
    <div className="page flex">
      <div className='flex container'>
        <Cart items={cartA} cartNumber={1}/>
        <button className='btn'>Swap Odds</button>
        <Cart items={cartB} cartNumber={2}/>
      </div>
    </div>
  );
}

export default App;
