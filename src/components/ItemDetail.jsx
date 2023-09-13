import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ product }) => {
    const {id} = useParams()

const filteredProducts = product.filter((product)=> product.id == id)

console.log(product)

return (
    <>  
    {
        filteredProducts.map((p)=>{
            return(
                <div className='flex flex-row flex-wrap' key={p.id}>
                    <div>
                        <img className='m-10 w-64' src={p.image} alt="" />
                    </div>
                    <div className='flex flex-col flex-nowrap self-center w-96'>
                        <h1 className='font-semibold'>{p.title}</h1>
                        <p>{p.description}</p>
                        <p className='font-medium'>Categoría: {p.category}</p>
                        <p className='font-bold text-lime-700'>$ {p.price}</p>
                        <ItemCount />
                    </div>
                </div>
            )
        })
    }
    </>
)
}

export default React.memo(ItemDetail);