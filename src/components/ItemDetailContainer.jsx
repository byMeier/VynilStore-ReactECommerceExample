import {useEffect, useState} from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

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