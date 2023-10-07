import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({ product, id }) => {

    const {addItem} = useContext(CartContext)
    const onAdd = (quantity) =>{
        if(quantity !=0){
            addItem(product, quantity, id)
        }
    }

return (
    <>  
        <div className='flex flex-row flex-wrap place-content-center' key={product.id}>
            <div className='flex flex-row flex-wrap items-center justify-center border rounded p-2 m-2 shadow-md w-5/12 h-5/12'>
                <img className='m-10 w-3/4' src={product.image} alt="" />
            </div>
            <div className='flex flex-col flex-nowrap self-center w-5/12 h-5/12 ml-3'>
                <h1 className='font-semibold text-3xl'>{product.title}</h1>
                <p className='text-lg'>{product.description}</p>
                <p className='font-bold text-paidgreen text-2xl'>USD $ {product.price}</p>
                <ItemCount 
                    onAdd={onAdd}
                />
            </div>
        </div>
        
    </>
)
}

export default React.memo(ItemDetail);