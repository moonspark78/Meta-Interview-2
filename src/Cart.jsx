import React from 'react'
import Item from "./Item"

export const Cart = ({items, cartNumber}) => {
  return (
    <div className='cart-container'>
        <h3 className='to'>Cart {cartNumber}</h3>
      {
        items.map((item, index) =>{
          return (
            
            <Item key={index} item={item} index={index}/>
          )
        })
      }
    </div>
  )
}
