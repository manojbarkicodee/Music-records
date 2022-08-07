import * as types from "./actiontype"
let initialstate={
   musicRecords:[],
   filterdata:[],
isLoading:false,
isFailure:false,
editis_Loading:false,
edit_sucesss:false,
edit_failure:false
}


export let Appreducer=(state=initialstate,{type,payload})=>{
switch(type){
    case types.Get_Music_Records_Request:{
        return {...state,isLoading:true}
    }
    case types.Get_Music_Records_success:{
        return {...state,musicRecords:payload,isLoading:false}
    }
    case types.Get_filter_data :{
        return {...state,filterdata:payload,isLoading:false}
    }
    case types.Get_Music_Records_Failure:{
        return {...state,isFailure:true}
    }
    case types.Edit_Music_Records_Request:{
        return {...state,editis_Loading:true}
    }
    case types.Edit_Music_Records_success :{
        return {...state,edit_sucesss:true,editis_Loading:false}
    }
    case types.Edit_Music_Records_Failure :{
        return {...state,edit_failure:true}
    }
    default :{
        return state
    }
}
}