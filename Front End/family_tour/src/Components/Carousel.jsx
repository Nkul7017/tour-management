import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.section`
@media screen and (max-width: 800px) {
 img{
  width:40vw;
  height:50vh;
 }}
@media screen and (max-width: 1600px) {
 img{
  width:80vw;
  height:75vh;
 }}
@media screen and (max-width: 400px) {
 img{
  width:90vw;
  height:50vh;
 }}
`
const Carousel = ({images}) => {
  return (
    <>
    <Wrapper>
    <div id="carouselExampleRide" className="carousel slide mt-3 " data-bs-ride="true">
  <div className="carousel-inner">
  {images.map((im,i)=>
      <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
      <center><img src={im} className=" img-fluid img-thumbnail " alt="images" /></center>
    </div>
    )}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Wrapper>
    </>
  )
}

export default Carousel

