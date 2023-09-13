import {useState} from 'react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idPurchase, setIdPurchase] = useState("001")

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("Campo vacío."): alert(`Bienvenido, ${nombre}`)
        email === "" ? alert("Campo vacío."): alert(`Registrado con el email, ${email}`)
        console.log("Información Enviada")
    }

return (
    <>
    <form onSubmit={handleSubmit} >

        <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <button>Enviar</button>

    </form>

    <h3>Id de tu compra: {idPurchase}</h3>

    </>
)
}

export default Form