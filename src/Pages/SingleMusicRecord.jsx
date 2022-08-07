import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getmusicrecords } from '../Redux/Appreducer/action'

const SingleMusicRecord = () => {
  let {id}=useParams()
  let dispatch=useDispatch()
  let {musicRecords}=useSelector((state)=>state.Appreducer)
 
let [data,setdata]=useState({})

useEffect(()=>{
  if(musicRecords.length===0){
    dispatch(getmusicrecords())
    console.log(musicRecords.length)

  }
},[dispatch,musicRecords.length])
useEffect (() => {
  if(id){
  let indivisualdata=musicRecords.find((el)=>el.id===id)
  if(indivisualdata){
    setdata(indivisualdata)
  }
}
}, [musicRecords])

  return (
    <div>

<img src={data.img}></img>
        <p>{data.artist}</p>
        <p>{data.name}</p>
        <p>{data.genre}</p>
        <p>{data.year}</p>

    </div>
  )
}

export default SingleMusicRecord