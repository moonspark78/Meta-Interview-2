import React from 'react'

export const Cart = ({items, cartNumber}) => {
  return (
    <div className='cart-container'>
        <h3 className='to'>Cart {cartNumber}</h3>
      {
        items.map((item, index) =>{
          return (
            
            <div key={index}>{item}</div>
          )
        })
      }
    </div>
  )
}
