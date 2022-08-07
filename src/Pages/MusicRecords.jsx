import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getmusicrecords } from '../Redux/Appreducer/action'
import  styled from 'styled-components'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {Link} from "react-router-dom"
const MusicRecords = () => {
  let [searchparams]=useSearchParams()
  let navigate=useNavigate()
let dispatch=useDispatch()
let location=useLocation()
let {musicRecords}=useSelector((state)=>state.Appreducer,shallowEqual)
  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchparams.get("sortby");
      const queryParams = {
        params: {
          genre: searchparams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      //dispatch(getMusicRecords())
      dispatch(getmusicrecords(queryParams));
    }
  //  dispatch(getmusicrecords())
  }, [location.search,dispatch])
  // (musicRecords)
  return (
    <GridWrapper>
     {
      musicRecords.map((el)=><div key={el.id}>
        <Link to={`/music/${el.id}`}>
        <img src={el.img}></img>
        <p>{el.artist}</p>
        <p>{el.name}</p>
        <p>{el.genre}</p>
        <p>{el.year}</p>
        </Link>
        <button onClick={()=>navigate(`/music/${el.id}/edit`)}>Edit</button>
      </div>)
     }
    </GridWrapper>
  )
}

export default MusicRecords


const GridWrapper=styled.div`
display:grid;
Grid-template-columns:repeat(4,1fr)
`