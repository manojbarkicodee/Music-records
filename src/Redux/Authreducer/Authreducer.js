import * as types from "./actiontype"
export let initialstate={
    data:{
        isAuth:false,
        token:""
    },
isLoading:false,
isFailure:false
}

// localStorage.setItem("token",JSON.stringify(initialstate.data))
export let Authreducer=(state=initialstate,{type,payload})=>{
switch(type){
    case types.Get_Login_Request:{
        return {...state,isLoading:true}
    }
    case types.Get_Login_success:{
        let data1={...state.data,isAuth:true,token:payload}
        localStorage.setItem("token",JSON.stringify(data1))
        return {...state,data:{...state.data,isAuth:true,token:payload},isLoading:false}
    }
    case types.Get_Login_Failure:{
        return {...state,isFailure:true}
    }
    default :{
        return state
    }
}
}