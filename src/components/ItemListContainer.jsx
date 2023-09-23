import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Loader from "./Loader"


const ItemListContainer = () => {

    const {category} = useParams()

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
    
        return data
    }
        
    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProducts().then((product)=>setProduct(product))
    },[])



    const filteredProducts = product.filter((p)=> p.category === category)

    return (
        <div className='flex flex-row flex-wrap justify-center'>
            {
                product.length === 0 ? <Loader/> : category ? <ItemList product={filteredProducts} /> : <ItemList product={product} />
            }
        </div>
    )
}

export default ItemListContainer