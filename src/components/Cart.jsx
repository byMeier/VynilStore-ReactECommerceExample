import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const {cart, setCart, comision} = useContext(CartContext)


  return (
    <div>
      
      Mi carrito

      {comision}

      {cart.length > 0 ? 
      <Form /> 
      : 
      <button>Regresa a la pantalla principal</button>}

    </div>
  )
}

export default Cart