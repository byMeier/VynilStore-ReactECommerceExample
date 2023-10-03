import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const {cart, onClear, subTotal} = useContext(CartContext)

if(cart.length === 0){
  return(
    <div>
    <h1>Tu carrito está vacío.</h1>
    <Link to={"/"}>
      <button className='z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>Volver al Menú Principal</button>
    </Link>
  </div>
  )
}

  return (
    <>
    {
      cart.map((p)=>
        <div>   
          <div className='flex flex-column flex-nowrap' key={p.id}>
            <div>
                <img className='m-10 w-64' src={p.image} alt="" />
            </div>
            <div className='flex flex-col flex-nowrap self-center w-96'>
                <h1 className='font-semibold'>{p.title}</h1>
                <p className='font-bold text-lime-700'>$ {p.price}</p>
            </div>
            <div>
              <h1>{p.quantity}</h1>
            </div>
          </div>
        </div>
      )
    }

        <div>
            <button onClick={onClear}>Limpiar Carrito</button>
          </div>
          <div>
            <p>Su total es: ${subTotal.toFixed(2)}</p>
          </div>
          <div>
          <Link to="/checkout">
            <button>Comprar</button>
          </Link>
        </div>
    </>
  )

}

export default Cart