import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const {cart, setCart} = useContext(CartContext)

  return (
    <div>

      {cart.length > 0 ? 
      <Form /> 
      : 
      <div>
        <h1>Tu carrito está vacío.</h1>
        <Link to={"/"}>
          <button className='z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>Volver al Menú Principal</button>
        </Link>
      </div>}

    </div>
  )
}

export default Cart