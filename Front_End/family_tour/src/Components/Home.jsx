import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Shape from './Shape'
import Video from './Video'
import Image1 from '../assets/Image1.jpg'
import Image3 from '../assets/Image3.jpg'
import Image2 from '../assets/Image2.jpg'
import Image4 from '../assets/Image4.jpg'
import Image5 from '../assets/Image5.jpg'
import Footer from './Footer'
import Card3 from './Card3';
import Card from './Card';
import Heading from './Heading'
function Home() {
  const [datas, setDatas] = useState([]);
    const get = async () => {
      try {
        const response = await axios.get(`https://tour-management-system-0qjl.onrender.com/Destination`);
        console.log(response.data);
        setDatas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      get();
    }, []);
  return(
  <>  
    <Video/>
    <Shape heading="Embrace the Joy of Togetherness on Our Family Tours" Image={Image1}>
    Join us on a remarkable journey where happy families come together to create lifelong memories. Our family tours are designed to bring laughter, adventure, and love into every moment, fostering connections that will endure through generations.
      </Shape>
      <Heading heading="Favourite Places"/>
    <div className='container'>
   <div className="row d-flex  ">
    <Card heading="Swarn Bhawan" image={Image3}>
    Where the sacred Ganges flows, embracing pilgrims in a mystical embrace, offering a gateway to spiritual awakening.
    </Card>
    <Card heading="Haridwar" image={Image2}>
    Where opulence and heritage intertwine, inviting visitors to indulge in regal splendor amidst a timeless treasure trove of history.
    </Card>
    <Card heading="KedarNath" image={Image4}>
    Where mountains embrace the divine, inviting seekers to immerse in a spiritual journey amidst breathtaking beauty
    </Card>
   </div>
    </div>
    <Shape heading="Uncover Hidden Gems and Read Reviews from Fellow Travelers" Image={Image5}>
    Welcome to our platform, where your journey begins. Immerse yourself in a world of extraordinary experiences and unlock the best that travel has to offer. With our intuitive interface and a community of passionate explorers, you can find your perfect adventure with ease.
      </Shape>
  <Heading heading="Reviews and Rating"/>
  <div className='container' >
   <div className="row" >
   {datas.map((v,i)=>
   <>
   <div className="col-md-4 mt-md-5 mb-sm-3 mb-2 ">
   {i<3?<Card3 key={i} v={v} />:null}
   </div>
   </>
   )}
   </div>
    </div>
    <Footer/>
   
    </>
  )
}
export default Home;
