import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

console.log(producto)

return (
    <>
        <div className='flex flex-row flex-wrap items-center justify-center border rounded p-2 m-2 shadow-lg w-96 h-112' key={producto.id}>
            <div>
                <img className='m-10 w-64' src={producto.image}/>
            </div>
            <h2 className='font-medium'>Título: {producto.title}</h2>
            <button className='font-semibold z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-50'>
                <Link to={`/item/${producto.id}`}>
                    Agregar al Carrito
                </Link>
            </button>
        </div>
    </>
)
}

export default Item