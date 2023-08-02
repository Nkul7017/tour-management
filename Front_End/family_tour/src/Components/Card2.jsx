import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper=styled.section`

img{
    object-fit:cover;
    height:200px;
    width:100%
}
.card{
    background-color:maroon;
    width:20rem;
    height:23rem;
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
const Card2 = ({heading,image,children,_id,page}) => {
  return (
    <>
     <div className="col-md-4  ">
        <Wrapper>
           <center>
 <div className="card m-5 d-flex flex-column justify-content-around " >
  <Link to={`/${page}/${_id}`} > <img src={image} className="card-img-top img-thumbnail" alt="temple" /></Link>
  <div className="card-body p-2 ">
    <h5 className="card-title" >{heading}</h5>
    <p className="card-text">{children}</p>
  </div>
</div>
</center>
</Wrapper>
    </div>
   
    </>
  )
}

export default Card2
