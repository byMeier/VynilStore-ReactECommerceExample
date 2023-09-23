import { useState, createContext } from "react"

export const CartContext = createContext

const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const comision = "React en Coderhouse"

//Agregar elementos al carrito
//Eliminar
//Increment
//Decrement
//onAdd
//etc

  return (
    <div>

        <CartContext.Provider value={{cart, setCart, comision}}>

            {children}

        </CartContext.Provider>

    </div>
  )
}

export default ShoppingCartProvider