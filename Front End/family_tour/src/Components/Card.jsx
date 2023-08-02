import React from 'react'
import styled from 'styled-components';
const Wrapper=styled.section`

img{
    object-fit:cover;
    height:200px;
    width:100%
}
.card{
    background-color:maroon;
    max-width:300px;
    min-width:300px;
    max-height:400px;
    min-height:250px;
}
h5{
    color:goldenrod
}
p{
    color:white
}
.col1{
  display:flex;
  flex-direction:column;
  justify-content:center;
}
`;
const Card = ({heading,image,children}) => {

  return (
    <>
    
     <div className="col-md-3 m-lg-5 m-md-4 m-sm-2 ">
        <Wrapper>
           <center>
 <div className="card m-5  " >
  <img src={image} className="card-img-top" alt="temple" />
  <div className="card-body p-2 ">
    <h5 className="card-title" >{heading}</h5>
    <p className="card-text">{children}</p>
    {/* <a href="#" className="btn btn-success pe-5 ps-5 ">Visit</a> */}
  </div>
</div>
</center>
</Wrapper>
    </div>
   
    </>
  )
}

export default Card
