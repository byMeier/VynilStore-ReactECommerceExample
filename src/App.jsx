import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting = {"Bienvenido/a a tu tienda de música favorita!"}
      />
    </>
  )
}

export default App
