import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
    name:"role",
    initialState:{
        role:null
    },
    reducers:{
        cleareRole : (state,actions)=>{
            state.role = null
        },
        setRole:(state,actions)=>{
            state.role = actions.payload
        }
    }
})

export const {cleareRole,setRole} = roleSlice.actions
export default roleSlice.reducer