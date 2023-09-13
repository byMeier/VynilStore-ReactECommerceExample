import React from 'react'
import Item from './Item'

const ItemList = ({ product }) => {

  console.log(product)

  return(
    <>
    { 
        product.map((p)=>{
          return(
          <>
          <Item producto={p} key={p.id} />
          </>)
        }) 
    }
    </>
  )
}

export default ItemList