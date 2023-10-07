import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    
  <div className='flex flex-row flex-wrap'>
    <div className='flex self-center'>
      <h2 style={{display: totalQuantity > 0 ? 'block' : 'none'}} className='font-bold bg-bluely rounded-xl mr-1 w-6 text-center'>{totalQuantity}</h2> 
    </div>
    <div className='flex self-center font-semibold mr-10 w-10 h-10 origin-top-right  rounded-md bg-creamy focus:outline-none hover:bg-screamy'>
      <Link className='flex p-2' to={"/cart"}>
      <div>
          <span className="material-symbols-outlined basis-1/2">
            shopping_cart
          </span>
      </div>
      </Link>
    </div>
  </div> 
  )
}

export default CartWidget