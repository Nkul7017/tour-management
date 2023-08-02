import React from 'react'
import styled from 'styled-components';
import Video1 from '../assets/Video1.mp4'
import { Link } from 'react-router-dom';
const Wrapper=styled.section`
.videoStyles{
position:relative,
top:0;
left:0;
 width:100vw;
 height:70vh;
object-fit:cover;
 background-attachment: fixed
}
.headingStyles{
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)}

.centr{
  width:100vw;
    background-color:maroon;
    margin-top:-10px;
    padding:20px 20px;
    font-family:sans-serif;
    color:goldenrod;
    border:2px solid black;
    border-bottom-left-radius:0px ;
    border-bottom-right-radius:200px ;
}
.con{
  width:100%;
}
`;
const Video = () => {
 
  return (
    <>
    <Wrapper>
      <div className='con'>
      <div className="position-relative mt-3  ">
      <video autoPlay muted loop className='videoStyles' >
        <source src={Video1} type="video/mp4" />
      </video>
      <div  className='headingStyles' >
        <Link className='btn btn-success' to="/Destination">Search For Destination</Link>
      </div>
      </div>
      <div style={{width:"100vw"}} >
       <center className='centr' >
         <h3 className='fw-bolder'>Family: Where Life Begins and Love Never Ends</h3>
       <p className=" text-white  fw-semibold p-3  " >Discover the joy of exploring new destinations, creating cherished memories, and strengthening family bonds. Our web app is designed to simplify the process of planning and managing family tours, ensuring that every moment is filled with happiness and togetherness.</p>
       </center>
      </div>
      </div>
      </Wrapper>
    </>
  )
}

export default Video
