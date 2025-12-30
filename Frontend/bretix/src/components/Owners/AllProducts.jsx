import { useState } from "react"
import { useParams } from "react-router-dom"

const AllProducts = ()=>{
    const {id} = useParams()
    const [storeProducts,setStoreProducts]= useState([])
return (
    <div>hello world</div>
)
}
export default AllProducts