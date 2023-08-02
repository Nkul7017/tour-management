import React from 'react'
import Heading from './Heading'
import { styled } from 'styled-components'
const Wrapper=styled.section`
.con2{
    width:100vw;
    height:20vh;
    background-color:marron;
    display:flex;
    justify-content:center;
    align-items:center
}
h3{
    color:white;
}
`
const Footer = () => {
  return (
    <>
    <Wrapper>
    <div className='con2  ' style={{backgroundColor:"maroon",width:"100vw"}}>
  <h3>© 2023 Copyright: TripIndiaX.com</h3>
    </div>
    </Wrapper>
    </>
  )
}

export default Footer
