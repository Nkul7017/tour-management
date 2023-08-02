import React from 'react'
import Styled from 'styled-components'
import Image10 from '../assets/Image10.png'
const Wrapper=Styled.section`
.con1{
 width:100vw;
 height:100vh;
 background-image: url(${Image10});
 background-size:cover;
 background-repeat: no-repeat;
}
form{
 padding:5vw;
 background-color:maroon;
 box-shadow: 5px 5px 10px goldenrod;
}
 h1{
     color:white;
     text-shadow: 2px 2px 10px black;
     width:15vw;
 }
 .con2{ 
  background-color:maroon;
 }
 p,ul{
  color:goldenrod;
 }
`;
function Contact() {
  return (
   <>
   <Wrapper>   <div className="con1  d-flex align-items-center justify-content-center p-3 ">
      <div className='con2 p-3 rounded-5'>
        <h1 className='fwbolder' >Contact Us</h1>
        <p >For any inquiries or assistance, please feel free to reach out to us:</p>
        <ul >
          <li >Email: thakurnakul119@gmail.com</li>
          <li>Phone: +917017846627</li>
          <li>Address: Dehradun,Uttrakhand</li>
        </ul>
      </div>
    </div>
    </Wrapper>
   </>
  )
}

export default Contact
