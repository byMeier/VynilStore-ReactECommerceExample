import {useState, useContext} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { CartContext } from '../context/ShoppingCartContext'
import Swal from 'sweetalert2'
import Congrats from './Congrats'

const Checkout = () => {

    const {cart} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [emailVal, setEmailVal] = useState("")
    const [tel, setTel] = useState(0)
    const [orderId, setOrderId] = useState(null)

    const { onClear } = useContext(CartContext)
    const db = getFirestore()

    const handleSubmit = (e) => {
    e.preventDefault()
    if(email !== emailVal){        
            Swal.fire({
            title: 'Los emails deben ser idénticos!',
            text: 'Intente nuevamente.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        
    }else{
        addDoc(ordersCollection, order).then(({id})=>{
            setOrderId(id)
            onClear()
        } )
    }

    }

const order = {
    buyer:{
        nombre, email, emailVal
    },
    items: cart.map(({id, title, price, quantity}) => ({
        id, title, price, quantity
    }))
    
}

const ordersCollection = collection(db, "orden")

return (
    <>
        {
        orderId != null ?
        <Congrats
            orderId={orderId}
            email={email}
            nombre={nombre}
            tel={tel}
        />
        :
        <div style={{display:"none"}}>
        <Congrats />
        </div> ?
        <div>
            <h1 className='text-xl font-bold text-center'>¡Bienvenido!</h1>
            <h2 className='text-md font-medium text-center'>Completa el formulario a continuación para obtener  tu número de orden para el seguimiento de tu compra.</h2>
            <form className='m-auto w-1/4 mt-5' onSubmit={handleSubmit}>
                <h1>Ingrese su nombre:</h1>
                <input className="mt-1 pl-3 m-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1     ring-inset ring-bluely placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-sbluely  sm:text-sm sm:leading-6" type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.   value)} />
                <h1 className='mt-2'>Ingrese su teléfono:</h1>
                <input className="mt-1 pl-3 m-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-bluely placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-sbluely  sm:text-sm sm:leading-6"  type="number" maxLength={10} placeholder='11-2345-6789' onChange={(e) => setTel(e.target. value)} />
                <h1 className='mt-2'>Ingrese su email:</h1>
                <input className="mt-1 pl-3 m-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1     ring-inset ring-bluely placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-sbluely  sm:text-sm sm:leading-6" type="email" placeholder='Email' onChange={(e) => setEmail(e.target.    value)} /> 
                <h1 className='mt-2'>Repita su email:</h1>
                <input className="mt-1 pl-3 m-auto block w-full rounded-md border-0 py-1.5 shadow-sm ring-1     ring-inset ring-bluely placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-sbluely  sm:text-sm sm:leading-6" type="email" placeholder='Email' onChange={(e) => setEmailVal(e.    target.value)} /> 
                <div className='flex place-content-center'>
                <button className='font-semibold mt-5 w-24 h-10 rounded-md bg-bluely focus:outline-none     hover:bg-sbluely' type='submit'>Comprar</button>
                </div>
            </form>
        </div>
        :
        <div style={{display:"none"}}>
        <Congrats />
        </div>

}

    </>
)
}

export default Checkout