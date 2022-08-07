import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { editmusicrecords, getmusicrecords } from '../Redux/Appreducer/action'
import MusicRecords from './MusicRecords'

const EditMusicRecord = () => {
let {id}=useParams()
let dispatch=useDispatch()
let {musicRecords}=useSelector((state)=>state.Appreducer)
let [editname,seteditname]=useState("")
let [editartist,setartist]=useState("")

useEffect(()=>{
  if(musicRecords.length===0){
    dispatch(getmusicrecords())
  }
},[dispatch,musicRecords.length])



useEffect(() => {
  if(id&&musicRecords.length>0){
 let newdata=musicRecords.find((el)=>el.id===id)

seteditname(newdata.name)
setartist(newdata.artist)
  }

}, [id,musicRecords.length])

  let onUpdate=(e)=>{
e.preventDefault()
let params={name:editname,artist:editartist}
dispatch(editmusicrecords(params,id)).then((res)=>{


  dispatch(getmusicrecords())
})
  }
  return (
    <div>
      <form onSubmit={onUpdate}>
      <label htmlFor=""> music name</label>
      <input type="text" onChange={(e)=>seteditname(e.target.value)} defaultValue={editname} />
      <label htmlFor=""  >artist name</label>
      <input type="text" onChange={(e)=>setartist(e.target.value)} defaultValue={editartist} />
      <button>update</button>
      </form>
    </div>
  )
}

export default EditMusicRecord