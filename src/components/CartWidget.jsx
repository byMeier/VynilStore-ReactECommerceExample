import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
//ICONOS DE FONTS.GOOGLE.COM/ICONS

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <div className='flex flex-row place-items-end gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm'>
      <div>
        <Link to={"/cart"}>
          <span className="material-symbols-outlined basis-1/2">
            shopping_cart
          </span>
        </Link>
      </div>
      <div>
        <h2 className='basis-1/2'>{totalQuantity}</h2> 
      </div>
      
    </div>
  )
}

export default CartWidget