import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Card2 from './Card2'
import styled from 'styled-components';
import axios from 'axios';
const Wrapper=styled.section`
.con1{
  margin-top:50px;
  width:100vw;
}
`;
const Destination = () => {
  const [datas,setDatas]=useState([]);
  const [datas2,setDatas2]=useState([]);
  const matchingData = [];
  const [search,setSearch]=useState("");
 const get= async()=>{
 const {data}=await axios.get("https://tour-management-system-0qjl.onrender.com/Destination");
 setDatas(data);
 setDatas2(data);
  }
  useEffect(()=>{
    get();
  },[])

  function handle()
  {
    var i=0;
    datas.forEach((v)=>{
      if((v.place_name.replace(/\s/g, "").toLowerCase()===search)||(v.state.replace(/\s/g, "").toLowerCase()===search)||(v.city.replace(/\s/g, "").toLowerCase()===search))
      {
        matchingData.push(v);
        i++;
      }
    })
    if(i>0)
    {
      setDatas(matchingData);
    }
  }
  function handle1(e)
  {
    setSearch(e.target.value.trim().replace(/\s/g, "").toLowerCase());
  }
  useEffect(()=>{
    if(search.length===0)
    {
      setDatas(datas2);
    }
  },[search])
  return (
    <>
    <Wrapper>
    <center className='mt-5'><h3  className=" mt-5 mb-0 p-3 rounded-pill d-inline-block shadow fw-bolder " style={{backgroundColor:"goldenrod",color:"white"}}  >Unlock the Beauty of India</h3></center>
    <div className="con1 mt-2 ">
      <div className="row justify-content-center ">
        <div className="col">
   <center> <input type="text" className='form-control w-50 border-2 border-black border-opacity-50' onChange={handle1}  /> 
   <button className='btn btn-success mt-1 'onClick={handle}>Search</button>
   </center>
        </div>
      </div>
      <div className="row justify-content-center ">
        {
          datas&&datas.map((v)=>
          <>
         <Card2 image={v.image[0]} heading={v.place_name} _id={v._id} page="ParticularDestination" >{v.description}</Card2>  
          </>
          )
        }        
      </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Destination
