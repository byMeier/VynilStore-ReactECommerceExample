import React, {useState} from 'react'

const ItemCount = ( {onAdd} ) => {

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

return (
    <>
        <div className='mt-2 w-56 origin-top-right'>
            <div className='flex flex-row flex-nowrap m-auto'>
                <button className='font-semibold z-10 mr-2 mt-2 w-20 h-10 origin-top-right rounded-md bg-bluely focus:outline-none hover:bg-sbluely' onClick={sumar}>+</button>
                <p className='font-semibold z-10 mt-2 mr-2 w-56 h-10 origin-top-right rounded-md bg-creamy focus:outline-none text-center p-2'>{contador}</p>
                <button className='font-semibold z-10 mt-2 w-20 h-10 origin-top-right rounded-md bg-bluely focus:outline-none hover:bg-sbluely' onClick={restar}>-</button>
            </div>
            <button className='font-semibold z-10 mt-2 w-56 h-10 origin-top-right rounded-md bg-bluely focus:outline-none hover:bg-sbluely' onClick={()=>onAdd(contador)}>Agregar al Carrito</button>
        </div>
    </>
)
}

export default ItemCount