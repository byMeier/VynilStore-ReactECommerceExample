import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <>
        <div className='flex content-center place-content-center'>
            <h1 className='mt-[250px] text-xl font-normal'>{greeting}</h1>
        </div>
        </>
    )
}

export default ItemListContainer