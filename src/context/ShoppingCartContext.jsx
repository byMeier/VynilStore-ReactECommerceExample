import { useState, createContext } from "react"

export const CartContext = createContext()

const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState([])

//Agregar elementos al carrito
//Eliminar
//Increment
//Decrement
//onAdd
//etc

  return (
    <div>

        <CartContext.Provider value={{cart, setCart}}>

            {children}

        </CartContext.Provider>

    </div>
  )
}

export default ShoppingCartProvider