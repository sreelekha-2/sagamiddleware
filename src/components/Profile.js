import React from 'react'

import { useSelector ,useDispatch} from 'react-redux'


export default function Profile() {

    const {name,age}=useSelector(state=>state)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>Redux saga</h2>
        <p>My name is {name}</p>
        <p>My age is {age}</p>

        <input type="button" value="Update Name" onClick={()=>dispatch({type:"UPDATE_NAME",payload:"sreelekha kutikanti"})}/>

        <input type="button" value="Update Age" onClick={()=>dispatch({type:"UPDATE_AGE",payload:"23"})}/>
    
    </div>
  )
}
