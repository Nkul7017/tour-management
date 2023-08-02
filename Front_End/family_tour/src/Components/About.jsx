import React from 'react'
import Image9 from '../assets/Image9.jpg'
import Styled from 'styled-components'
const Wrapper=Styled.section`
.con1{
  min-height:100vh;
  max-height:500vh;
  width:100vw;
  background-image: url(${Image9});
  background-size:cover;
   background-repeat: repeat;
   baclground:orange;
}
p{
  background:maroon;
  color:white
}
h1{
  color:white;
  text-shadow:5px 5px 10px black
}
pre{
font-size:20px;
}
`;
function About() {
  return (
    <>
    <Wrapper>
    <div className=' con1  d-flex justify-content-center align-items-center flex-column  p-5 ' >
   <h1 className='fw-bolder p-3' > Welcome to Our Family </h1>

<p className='p-5 border-1 rounded-5 ' >At <b>TripIndiaX</b>, we understand the importance of creating unforgettable moments with your loved ones. Our mission is to provide families like yours with the opportunity to explore the incredible beauty and cultural richness of India together.

As a team of travel enthusiasts and experts, we are passionate about curating unique and immersive experiences that cater to the diverse interests and needs of families. Our carefully crafted tour packages are designed to showcase the best of India, from its iconic landmarks to its hidden gems, allowing you to embark on a journey of discovery and bonding.

We believe that family trips are not just about visiting popular attractions; they are about creating lasting memories, fostering connections, and deepening the bonds that tie families together. That's why we go the extra mile to ensure that every aspect of your tour is carefully planned and executed, providing you with a seamless and enjoyable experience.

From exploring ancient forts and palaces to indulging in authentic culinary delights, our itineraries are thoughtfully curated to offer a perfect blend of adventure, education, and relaxation. Our knowledgeable guides will share fascinating stories and insights, making your journey through India's rich history and cultural tapestry truly captivating.
</p>
<pre className="fw-bolder">~ Nakul Thakur</pre>
    </div>
    </Wrapper>
    </>
  )
}
export default About
