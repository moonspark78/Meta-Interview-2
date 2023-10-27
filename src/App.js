import { useState } from 'react';
import './App.css';
import { cart1, cart2 } from './data';
import {Cart} from "./Cart"

function App() {
  const [cartA, setCartA] = useState(cart1)
  const [cartB, setCartB] = useState(cart2)


  return (
    <div className="page flex">
        <Cart/>
        <button>Swap Odds</button>
        <Cart/>
    </div>
  );
}

export default App;
