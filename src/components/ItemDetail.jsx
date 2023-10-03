import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

return (
    <>  
        <div className='flex flex-row flex-wrap' key={product.id}>
            <div>
                <img className='m-10 w-64' src={product.image} alt="" />
            </div>
            <div className='flex flex-col flex-nowrap self-center w-96'>
                <h1 className='font-semibold'>{product.title}</h1>
                <p>{product.description}</p>
                <p className='font-medium'>Categoría: {product.category}</p>
                <p className='font-bold text-lime-700'>$ {product.price}</p>
                <ItemCount 
                    id = {product.id}
                    title = {product.title}
                    price = {product.price}
                />
            </div>
        </div>
        
    </>
)
}

export default React.memo(ItemDetail);