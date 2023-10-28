import React from 'react'

export const Cart = ({items, cartNumber}) => {
  return (
    <div className='cart-container'>
        <h3 className='to'>Cart {cartNumber}</h3>
      {
        items.map((item) =>{
          return (
            
            <div>{item}</div>
          )
        })
      }
    </div>
  )
}
