import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import ShoppingCartContext from './context/ShoppingCartContext'

const App = () => {

  

  return (
    <ShoppingCartContext>
    <BrowserRouter>

      <NavBar/>
      
      <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path="product/:id" element={<ItemDetail />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
    </ShoppingCartContext>
  )
}

export default App
