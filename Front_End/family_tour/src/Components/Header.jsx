import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
function Header({display}) {
 const [display1,setDisplay1]=useState(true)
 const navigate=useNavigate()
  const get=async()=>{
    try{
const res=await fetch("http://localhost:5000/header",{
  method:"GET",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include"
})
console.log(res);
    if(res.status===200)
   { 
  setDisplay1(false);
  }
}
    catch(e)
    {
      console.log(e);
    }
  }
  useEffect(()=>{
    get();
  },[display])
  async function handlelogout()
  {
    try{
      const res=await fetch("http://localhost:5000/logout",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      console.log(res);
          if(res.status===200)
         { 
        setDisplay1(true);
         navigate('/login',{replace:true})
        }
      }
          catch(e)
          {
            console.log(e);
          }
  }
  return (
   <>
<nav className="navbar fixed-top navbar-expand-lg " style={{"backgroundColor":"#8b0000",color:"white"}}>
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder ps-3 " to="/" style={{color:"white"}}>TripIndiaX</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end   bg-white border rounded-3 " id="navbarNav">
      <ul className="navbar-nav fw-medium p-2">
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light " aria-current="page" to="/">Home</Link>
        </li>
        {display1?
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/Login">Login</Link>
        </li>:
        <li className="nav-item pe-4">
          <button className="nav-link btn btn-outline-light" onClick={handlelogout} >Logout</button>
        </li>}
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/Destination">Destination</Link>
        </li>
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/Booking">Booking</Link>
        </li>
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/Packages">Packages</Link>
        </li>
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/About">About</Link>
        </li>
        <li className="nav-item pe-4">
          <Link className="nav-link btn btn-outline-light" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Header
