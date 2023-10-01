import {useState} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("Campo vacío."): alert(`Bienvenido, ${nombre}`)
        email === "" ? alert("Campo vacío."): alert(`Registrado con el email, ${email}`)
        
        addDoc(ordersCollection, order).then(({id})=> setOrderId(id))
        // setCart([])
    }

const order = {
    buyer:{
        nombre, email
    },
    items: cart.map(({id, nombre, precio}) => ({
        id, nombre, precio
    }))
    
}

// const orden = "orden" + (orden.length + 1)

const ordersCollection = collection(db, "orden")

return (
    <>
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Comprar</button>

        </form>

        <h3>Id de tu compra: {orderId}</h3>
    </>
)
}

export default Form