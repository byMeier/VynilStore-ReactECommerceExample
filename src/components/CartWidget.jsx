import React from 'react'
//ICONOS DE FONTS.GOOGLE.COM/ICONS

const CartWidget = () => {
  return (
    <div className='flex flex-row place-items-end gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm'>
      <span className="material-symbols-outlined basis-1/2">
        shopping_cart
      </span>
      <h2 className='basis-1/2'>7</h2> 
    </div>
  )
}

export default CartWidget