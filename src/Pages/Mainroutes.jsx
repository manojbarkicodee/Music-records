import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditMusicRecord from './EditMusicRecord'
import Homepage from './Homepage'
import Login from './Login'
import Protedroute from './Protedroute'
import SingleMusicRecord from './SingleMusicRecord'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
  <Route path="/music/:id" element={<Protedroute>
    <SingleMusicRecord /></Protedroute>} />
  <Route path="/music/:id/edit" element={
    <Protedroute>
  <EditMusicRecord />
  </Protedroute>} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}

export default Mainroutes