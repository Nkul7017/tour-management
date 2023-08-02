import React from 'react'

import styled from 'styled-components';
const Wrapper=styled.section`
img{
    width:75vw;
    height:30rem;
    border-top-left-radius:200px ;
    border-bottom-right-radius:200px ;
    object-fit:"cover"
}
center{
    background-color:"maroon";
    padding:20px 20px;
    font-family:sans-serif;
    color:goldenrod
}
.whole{
    width:100vw;
    background-color:maroon;
    border:2px solid black;
    border-top-left-radius:200px;
    border-bottom-right-radius:200px
}

`
const Shape = ({heading,children,Image}) => {
  return (
    <>
    <Wrapper>
     <div className='mt-5 h-50 p-5 whole' >
    <div className="row  ">
      <div className="col p-5"  >
      <img src={Image}  alt="image" className=' d-block p-5 ' />
       <center > <h3 className='fw-bolder'>{heading}</h3>
       <p className=" text-white  fw-semibold p-2  ">{children}</p>
       </center>
      </div>
      </div>
    </div>
    </Wrapper>
    </>
  )
}

export default Shape
