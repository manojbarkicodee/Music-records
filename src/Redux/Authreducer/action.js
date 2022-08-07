import * as types from "./actiontype"
import axios from "axios"
export let Postlogindetails=(params)=>(dispatch)=>{
    dispatch({type:types.Get_Login_Request})
   return axios.post("https://reqres.in/api/login",params).then((res)=>dispatch({type:types.Get_Login_success,payload:res.data.token})).catch((err)=>dispatch({type:types.Get_Login_Failure}))
}