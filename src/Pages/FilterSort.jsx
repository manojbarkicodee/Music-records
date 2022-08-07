import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getfilterdata} from '../Redux/Appreducer/action'

const FilterSort = () => {
  let dispatch=useDispatch()
  let {filterdata}=useSelector((state)=>state.Appreducer,shallowEqual)
  let [searchparams,setsearchparams]=useSearchParams()
  let initialfiltergenres=searchparams.getAll("genre")
  let initialsortby=searchparams.get("sortby")
let [sortBy,setsortby]=useState(initialsortby||"")

  // (initialfiltergenres)
  let [filtergenres,setfiltergenres]=useState(initialfiltergenres||[])

  useEffect(() => {

    dispatch(getfilterdata())
    
  }, [])
  
  // (musicRecords)

const ids = filterdata.map(o => o.genre)
const Genres=filterdata.filter(({genre}, index) => !ids.includes(genre, index + 1))
let onHandle=(e)=>{
  let task=e.target.value
const newgenres=[...filtergenres]

  if(newgenres.includes(task)){
newgenres.splice(newgenres.indexOf(task),1)
  }
  else{
    newgenres.push(task)
  }
  // (newgenres)
setfiltergenres(newgenres)
// (filtergenres)

}
let handleSortBy=(e)=>{
setsortby(e.target.value)
}
useEffect(() => {
  setsearchparams({genre:filtergenres,sortby:sortBy})
}, [setsearchparams,filtergenres,sortBy])

  return (
    <div>
{
Genres.map((el)=><div key={el.genre}>
<label>{el.genre}</label>
<input type="checkbox" value={el.genre} onChange={onHandle} defaultChecked={filtergenres.includes(el.genre)} />
</div>)

}
<h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>

    </div>
  )
}

export default FilterSort