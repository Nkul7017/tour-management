import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper=styled.section`
h3{
  background-color:Green;
  color:white;
}
table{
  background-color:maroon;
  color:white;
}
th,td{
  border:2px solid white;
  text-align:center;
}
th{
  color:black;
  background-color:goldenrod;
}
td:hover{
  color:white;
  background-color:black;
}
h4{
  background-color:maroon;
  color:goldenrod;
}
`
const Booking = () => {
  const [datas,setDatas]=useState([]);
  const navigate=useNavigate();
  const get=async()=>{
    try{
const res=await fetch("http://localhost:5000/booking",{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include"
})
console.log(res);
if(res.status===401){
navigate('/login')
}
const data=await res.json()
    if(res.status===200)
   { setDatas(data);
    console.log(data);}
 
}
    catch(e)
    {
      console.log(e);
    }
  }
  useEffect(()=>{
  get();
  },[])
  return (
   <>
   <Wrapper>
   <div className='container pt-5 mt-5  '>
   <center><h3 className=" mb-0 p-3 rounded d-inline-block shadow fw-bolder ">BOOKINGS</h3></center>
   {datas.length>0?
  <table className='table table-bordered table-hover table-responsive mt-5'>
    <tr>
      <th>SNo.</th>
      <th>Tour Name</th>
      <th>Check In Date</th>
      <th>Check Out Date</th>
      <th>Tickets</th>
      <th>Total Price</th>
    </tr>
   {datas.map((v,i)=>
   <>
   
 <tr>
  <td>{++i}</td>
 <td>{v.tour_name}</td>
 <td>{v.checkin_date}</td>
 <td>{v.checkout_date}</td>
 <td>Adult:{v.tickets.adult} <br /> Child:{v.tickets.child}</td>
 <td>{v.total_price}</td>
</tr>
</>
   )}
   
  </table>:
  <h4 className='text-center mt-5 w-25 m-auto p-3 '>Currently : No Bookings</h4>

  
  }
   </div>
   </Wrapper>
   </>
  )
}

export default Booking
