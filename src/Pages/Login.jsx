import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Postlogindetails } from '../Redux/Authreducer/action'

const Login = () => {
  let dispatch=useDispatch()
  let [email,setemail]=useState("eve.holt@reqres.in")
  let [password,setpassword]=useState("cityslicka")

  let location=useLocation()
  let navigate=useNavigate()
  console.log(location.state.from)
  let onSubmit=(e)=>{
    e.preventDefault()
dispatch(Postlogindetails({email,password})).then((res)=>{
  console.log(res.type)

  if(res.type==="Get_Login_Success"){
  navigate(location.state?.from?.pathname||"/",{replace:true})
}})
  }
  
  return (
    <div>
      <h1>Logindata</h1>
      <form action="" onClick={onSubmit}>
        <label>
          user Email
        </label>
        <input placeholder='enter email' value={email} type="email" onChange={(e)=>setemail(e.target.value)}></input>
        <label>
          user Password
        </label>
        <input placeholder="enter password" value={password} type="password" onChange={(e)=>setpassword(e.target.value)}></input>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login