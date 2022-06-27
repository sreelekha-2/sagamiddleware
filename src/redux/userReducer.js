import {createReducer} from "@reduxjs/toolkit"

const initialState={
    name:"sreelekha",
    age:22
}


const userReducer=createReducer(initialState,(builder)=>{
    builder.addCase("UPDATE_NAME_SUCCESS",(state,action)=>{
        state.name=action.payload
    })

    builder.addCase("UPDATE_AGE",(state,action)=>{
        state.age=action.payload
    })
})

export default userReducer