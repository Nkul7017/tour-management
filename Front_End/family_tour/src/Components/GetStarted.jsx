import React from 'react'
import Video2 from '../assets/Video2.mp4'
function GetStarted({setChange}) {
    const videoStyles={
      height:"100vh",
      width:"100%",
      objectFit:"cover",
    }
    const headingStyles={
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      zIndex:"9999"
    }
    const gradientStyles = {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,5) 100%)",
      
    };
    function handle()
    {
      setChange(false);
    }

  return (
    <>
<div style={{ position: "relative" }}>
        <video autoPlay muted loop style={videoStyles}>
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="heading" style={headingStyles} >
          <h1 style={{fontSize:"6vw",textShadow:"5px 5px 10px black"}}>Welcome To India</h1>
          <button className='btn btn-success ' onClick={handle}>Get Started</button>
        </div>
        <div style={gradientStyles}></div>
      </div>
  </>
  )
}

export default GetStarted
