import React from 'react'

export const Cart = ({items}) => {
  return (
    <div className='cart-container'>
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
