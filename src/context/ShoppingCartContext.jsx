import { useState, createContext } from "react"

export const CartContext = createContext()

const ShoppingCartContext = ({children}) => {

    const [cart, setCart] = useState([])
    let totalQuantity = cart.reduce((acc, item)=> acc + item.quantity, 0)
    const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0.00)

    const addItem = (item, quantity, id) => {
      if(!onCart(item.id)){
        setCart(prev => [...prev, {...item, quantity, id}])
        totalQuantity++
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

        <CartContext.Provider value={{cart, setCart, addItem, onRemove, onCart, onClear, totalQuantity, subTotal}}>

            {children}

        </CartContext.Provider>

    </div>
  )
}

export default ShoppingCartContext