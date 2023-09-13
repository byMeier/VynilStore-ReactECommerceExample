import React from 'react'

const Cart = () => {
  const cart = [1]
  return (
    <div>
      
      Mi carrshito

      {cart.length > 0 ? <Form /> : <button>Regresa a la pantalla principal</button>}

    </div>
  )
}

export default Cart