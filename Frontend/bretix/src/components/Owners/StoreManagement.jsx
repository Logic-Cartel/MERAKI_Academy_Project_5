import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const OwnerStoreManagement = ()=>{
    const navigate = useNavigate()
    const [storeId,setStoreId] = useState(localStorage.getItem("storeId"))
    const [storeTitle,setStoreTitle]=useState(localStorage.getItem("storeTitle"))

    // useEffect(()=>{axios.get(`http://localhost:5000/stores/${storeId}`)
    // .then((res)=>{setStoreInfo(res.data.result[0])})
    // .catch((err)=>{console.log(err);
    // })},[])
        
    return(
        <div>
            <h1>{storeTitle}</h1>
            <button onClick={()=>{navigate(`/${storeId}/allproducts`)}} >All Products</button>
            <button>Add New Product</button>
            <button>Manager Dashboard</button>
            <button>Change Store Info</button>   
        </div>
    )
}
export default OwnerStoreManagement