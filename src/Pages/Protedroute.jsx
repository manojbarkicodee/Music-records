import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { initialstate } from '../Redux/Authreducer/Authreducer'

const Protedroute = ({children}) => {
    let location=useLocation()
    // let {data}=useSelector((state)=>state.Authreducer)
    let data=JSON.parse(localStorage.getItem("token"))||initialstate.data
    if(!data.isAuth){
return <Navigate to="/login" replace state={{from:location}}></Navigate>
    }
  return (
    children
  )
}

export default Protedroute