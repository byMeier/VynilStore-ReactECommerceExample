import React, {useState} from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador < 10) {
            setContador( contador + 1);
        }
    };
    
    const restar = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }
    
    const onAdd = () => {
        alert("Agregó al carrito " + contador + " productos en total.")
    }

return (
    <>
        <div className='mt-2 w-56 origin-top-right'>
            <div className='flex flex-row flex-nowrap m-auto'>
                <button className='z-10 mt-2 mr-2 w-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-50' onClick={sumar}>+</button>
                <p className=' flex content-center place-content-center z-10 mt-2 mr-2 w-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>{contador}</p>
                <button className='z-10 mt-2 w-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-50' onClick={restar}>-</button>
            </div>

            <button className='z-10 mt-2 w-24 p-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-50' onClick={onAdd}>Agregar al Carrito</button>
        </div>
    </>
)
}

export default ItemCount