import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Reviews = ({reviews,name,place,setChng,chng}) => {
  const navigate=useNavigate();
    const [change,setChange]=useState(false);
const [change1,setChange1]=useState(false);
function handle3(value)
{ 
  console.log("value"+value)
  var st="";
for(let i=0;i<value;i++)
{
 st=st+"⭐"
}
console.log(st)
return st;
}
async function handlesubmit(e)
{ e.preventDefault();
  console.log(name);
const res=await fetch("http://localhost:5000/review",{
  method:"POST",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include",
  body: JSON.stringify({name:name,rating:Rating.value,comment:message.value,place:place})
})
if(res.status===200)
{
  setChng(!chng)
  message.value="";
  Rating.value="";
 setChange1(!change1);
}
if(res.status===404){
navigate('/login', {replace: true})
} 
  }
  return (
   <>
   <a style={{backgroundColor:"maroon",color:"white"}} href={"#card1"} onClick={()=>setChange(!change)} className='btn mt-2 mb-2 ' >Reviews{change?"▶️":"🔽"}  </a>
{reviews.map((v1,i)=>
<>
<div className="card mt-2 " id={"card"+i} style={{display:change?"block":"none"}} >
  <div className="card-header bg-success text-white ">
    {v1.username}🦸‍♂️ &nbsp; <span className=' float-md-end'> Rating:{ handle3(v1.rating)}</span>
  </div>
  <div className="card-body">
    <p className="card-text">{v1.comment}</p>
  </div>
</div>
</> 
)}  
{change?<a className='btn btn-primary mt-2 mb-2  ' onClick={()=>setChange1(!change1)} href='#frm'  >Add a Review</a>:null }
<form className='border border-1 mt-2 p-3 mb-4  ' onSubmit={handlesubmit} id='frm' style={{display:change1&&change?"block":"none",backgroundColor:"goldenrod"}} >
  <div className="mb-3">
    <label htmlFor="message" className="form-label fw-bold " style={{"color":"maroon"}}>Message</label>
    <textarea className="form-control border-2 border-black border-opacity-50" id="message" minLength={10} maxLength={50}  placeholder="Enter..." required></textarea>
  </div>
  <div className="mb-3">
  <label htmlFor="Rating" className="form-label fw-bold " style={{"color":"maroon"}} >Rating</label>
    <select className="form-select form-control border-2 border-black border-opacity-50" required id='Rating' >
      <option value="" selected>Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div className="mb-3">
    <button className="btn btn-primary"  type="submit" >Submit</button>
  </div>
</form>
   </>
  )
}
export default Reviews
