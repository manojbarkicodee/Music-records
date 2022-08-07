import * as types from "./actiontype"
import axios from "axios"
export let getmusicrecords=(params,id)=>(dispatch)=>{
    dispatch({type:types.Get_Music_Records_Failure})
    axios.get("http://localhost:8080/albums",params).then((res)=>dispatch({type:types.Get_Music_Records_success,payload:res.data})).catch((err)=>dispatch({type:types.Get_Music_Records_Failure}))
}

export let getfilterdata=()=>(dispatch)=>{
    dispatch({type:types.Get_Music_Records_Failure})
    axios.get("http://localhost:8080/albums").then((res)=>dispatch({type:types.Get_filter_data,payload:res.data})).catch((err)=>dispatch({type:types.Get_Music_Records_Failure}))
}
export let editmusicrecords=(params,id)=>(dispatch)=>{
    dispatch({type:types.Edit_Music_Records_Request})
   return axios.patch(`http://localhost:8080/albums/${id}`,params).then((res)=>dispatch({type:types.Edit_Music_Records_success}))
}