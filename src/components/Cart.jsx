import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'

const Cart = () => {

  const {cart, onRemove, onClear, subTotal} = useContext(CartContext)

if(cart.length === 0){
  return(
    <div>
    <h1 className='text-xl font-bold text-center'>Tu carrito está vacío.</h1>
    <Link to={"/"}>
      <button className='flex flex-row m-auto flex-wrap self-center font-semibold mt-2 w-48 p-2 h-10  rounded-md bg-bluely focus:outline-none hover:bg-sbluely'>Volver al Menú Principal</button>
    </Link>
  </div>
  )
}

  return (
    <>
    {
      cart.map((p)=>
        <div className='flex flex-row flex-wrap items-center justify-center border rounded m-2 shadow-md w-1/2 h-56 m-auto mt-5'>   
          <div className='flex flex-column flex-nowrap' key={p.id}>
            <div>
                <img className='w-48' src={p.image} alt="" />
            </div>
            <div className='flex flex-col flex-nowrap self-center w-96'>
                <h1 className='font-semibold'>{p.title}</h1>
                <p className='font-bold text-paidgreen'>USD $ {p.price}</p>
            </div>
            <div className='flex flex-row flex-wrap'>
              <h1 className='flex pl-1.5 mr-2 ring-2 ring-bluely rounded-xl w-6 h-6 self-center'>{p.quantity}</h1>
              <button className='flex pl-3 bg-outyred hover:bg-outred rounded-md w-20 h-6 self-center' onClick={() => onRemove(p.id)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    }

        <div>
            <button className='pl-10 flex flex-row m-auto flex-wrap self-center font-semibold mt-5 w-48 p-2 h-10  rounded-md bg-creamy focus:outline-none hover:bg-screamy' onClick={onClear}>Limpiar Carrito</button>
          </div>
          <div>
          <p className='m-auto pt-2 pl-6 ring-2 mt-2 ring-bluely rounded-lg w-48 h-10 self-center'>Su total es: <strong>${subTotal.toFixed(2)}</strong></p>
          <Link to="/checkout">
            <button className='pl-16 flex m-auto self-center font-semibold mt-2 w-48 p-2 h-10 rounded-md bg-bluely focus:outline-none hover:bg-sbluely'>Comprar</button>
          </Link>
        </div>
    </>
  )

}

export default Cart