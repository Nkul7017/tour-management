import React, { useEffect, useState } from 'react'
import Card2 from './Card2'
import styled from 'styled-components';
import axios from 'axios';
const Wrapper=styled.section`
.con1{
  margin-top:50px;
  width:100vw;
}
`;
const Packages = () => {
  const [datas,setDatas]=useState([]);
  const get=async()=>{
    try{
   const {data}=await axios.get("https://tour-management-system-0qjl.onrender.com/Packages")
   console.log(data);
   setDatas(data);
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
    <center className='mt-5'><h3  className=" mt-5 mb-0 p-3 rounded-pill d-inline-block shadow fw-bolder " style={{backgroundColor:"goldenrod",color:"white"}}  >Unforgettable Adventures for the Whole Family</h3></center>
    <div className="con1 mt-2 ">
      <div className="row justify-content-center ">
        <div className="col">
   <center>
   </center>
        </div>
      </div>
      <div className="row justify-content-center ">
         {
          datas&&datas.map((v)=>
          <>
         <Card2 image={v.image[0]} heading={v.package_name} _id={v._id} page="ParticularPackage" >{v.description}</Card2>  
          </>
          )
        }        
      </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Packages
