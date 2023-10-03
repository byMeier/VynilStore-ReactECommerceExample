import { useState, createContext } from "react"

export const CartContext = createContext()

const ShoppingCartContext = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
      if(!onCart(item.id)){
        setCart(prev => [...prev, {...item, quantity}])
      }
      else{
        console.error("El producto ya ha sido agregado!")
      }
    }

    const onRemove = (itemId) => {
      const updateCart = cart.filter(product => product.id !== itemId)
      setCart(updateCart)
    }

    const onClear = () => {
      setCart([])
    }

    const onCart = (itemId) => {
      return cart.some(product => product.id === itemId)
    }

  return (
    <div>

        <CartContext.Provider value={{cart, setCart, addItem, onRemove, onCart, onClear}}>

            {children}

        </CartContext.Provider>

    </div>
  )
}

export default ShoppingCartContext