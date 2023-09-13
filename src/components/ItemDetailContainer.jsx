import {useEffect, useState} from "react"
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
    
        return data
    }
        
    //ESTADO INICIAL DEL ARRAY
    const [product, setProduct] = useState([])
    
    //PROMESA PARA SETEARLE A PRODUCT LO QUE VENGA DE LA API
    useEffect(()=>{
        getProducts().then((product)=>setProduct(product))
    },[])

    return (
        <div className='flex flex-row flex-wrap justify-center'>
            <ItemDetail 
                product={product}
            />
        </div>
    )
}

export default ItemDetailContainer