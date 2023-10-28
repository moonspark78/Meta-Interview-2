import React from 'react'

export const Item = ({item, index}) => {
  return (
    <div><small style={{marginRight: "3px"}}>{index}. </small>{item.charAt(0).toUpperCase()+ item.slice(1)}</div>
  )
}
