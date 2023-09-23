import React from 'react' //SI SE USA REACT.MEMO NUNCA BORRAR ESTE IMPORT
import Item from './Item'

//React.memo???
/* Almacena informacion de props que ya ha sido mostrada en alguna oportunidad
SOBRE TODO CUANDO SE TIRE UN MAP O LLAMADO DE DATOS*/




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

export default React.memo(ItemList)