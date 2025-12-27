import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = ()=>{
    const navigate = useNavigate()

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge]= useState(null)
    const [country,setCountry]= useState('')
    const [phoneNumber,setPhoneNumber]= useState(null)
    const [date_of_birthday,setDate_of_birthday]= useState(null)
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [role_id,setUserRole] = useState(3)
    const [asOwner,setAsOwner] = useState(false)
    

    const makeOwnerStates = () =>{setUserRole(2), setAsOwner(true) }
    const makeUserStates = () =>{setUserRole(3), setAsOwner(false)}

    const registerData = {firstName,lastName,age,country,phoneNumber,date_of_birthday,email,password,role_id}

    const confirmRegister = async ()=>{
        try{
            const result = await axios.post("http://localhost:5000/users/register",registerData)
            navigate("/")
        }catch(err){console.log(err);
        }
    }

    return (
        <div>
            Create Business Account<input type="checkbox" checked={asOwner} onChange={()=>{if(asOwner){makeUserStates()}else{makeOwnerStates()}}} /><br/>
            <input type="text" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
            <input type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
            <input type="email" placeholder="Email here" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="Password here" onChange={(e)=>{setPassword(e.target.value)}} />
            <input type="number" placeholder="Mobile Number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
            <input type="number" placeholder="Your Age" onChange={(e)=>{setAge(e.target.value)}}/>
            <input type="text" placeholder="Country here" onChange={(e)=>{setCountry(e.target.value)}}/>
            <input type="date" placeholder="Birthday" onChange={(e)=>{setDate_of_birthday(e.target.value)}}/>
            {asOwner === true && <input  /> }
            <button onClick={confirmRegister}>Confirm</button>
        </div>
    )
}
export default Register