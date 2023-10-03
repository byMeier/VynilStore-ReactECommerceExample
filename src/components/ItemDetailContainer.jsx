import {useEffect, useState} from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    // const getProducts = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products")
    //     const data = await response.json()
    
    //     return data
    // }
        
    // //ESTADO INICIAL DEL ARRAY
    // const [product, setProduct] = useState([])
    
    // //PROMESA PARA SETEARLE A PRODUCT LO QUE VENGA DE LA API
    // useEffect(()=>{
    //     getProducts().then((product)=>setProduct(product))
    // },[])

    const {id} = useParams()
    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(() =>{
        const db = getFirestore()
        const oneItem = doc(db, "product", `${id}`)
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])

    return (
        <div className='flex flex-row flex-wrap justify-center'>
            <ItemDetail 
                product={product}
                id={id}
            />
        </div>
    )
}

export default ItemDetailContainer