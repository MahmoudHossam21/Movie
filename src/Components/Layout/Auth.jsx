import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function 
() {
  return (
    <>
    <Navbar auth={true}/>
<div className="container">
<Outlet/>

</div>
    </>
  )
}
