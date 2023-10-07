import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

console.log(producto)

return (
    <>
        
            <div className='flex flex-row flex-wrap items-center justify-center border rounded p-2 m-2  shadow-md w-96 h-112' key={producto.id}>
            <Link to={`/item/${producto.id}`}>
                <div>
                    <img className='m-10 w-64 transition duration-200 ease-in-out hover:scale-125' src={producto.image}/>
                </div>
                <h2 className='font-medium text-xl text-center w-full'>{producto.title}</h2>
                <h3 className='font-light text-md text-center w-full'>Ver Más</h3>
                </Link>
            </div>
        
    </>
)
}

export default Item