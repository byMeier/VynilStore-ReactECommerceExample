import React from 'react'
import { Link } from 'react-router-dom'

const Congrats = ({ orderId, nombre, email, tel }) => {

  return (
    <div>
      <div>       
        <h2 className='text-md font-medium text-center'>Enviamos tu número de orden a <em>{email}</em> para que no olvides hacer el seguimiento de tu compra!</h2>
        <h2 className='text-base font-medium text-center'>Te llamaremos al <em>{tel}</em> cuando esté lista!</h2>
        <h3 className='text-md font-bold text-center mt-2'>Id de tu compra: <em>{orderId}</em></h3>
        <img className='flex m-auto wd-24 h-24 mt-10' src="../img/loader.png" alt="logo" />
        <h1 className='text-xl font-bold text-center mt-2'>¡Gracias por tu compra <em>{nombre}</em>!</h1>
        <Link to={"/"}>
      <button className='flex flex-row m-auto flex-wrap self-center font-semibold mt-2 w-48 p-2 h-10  rounded-md bg-bluely focus:outline-none hover:bg-sbluely'>Volver al Menú Principal</button>
    </Link>
      </div>
    </div>
  )
}

export default Congrats