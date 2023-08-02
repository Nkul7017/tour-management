import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Carousel from './Carousel';
import { useParams } from 'react-router-dom'
import Styled from 'styled-components'
import Reviews from './Reviews';
import { Link } from 'react-router-dom';
const Wrapper=Styled.section`
.con1{
  width:100vw;
  height:100vh
}
h2{
  background-color:goldenrod;
  color:maroon
}
p{
  color:maroon
}
span{
  color:goldenrod
}
`
const ParticularDestination = () => {
  const [chng,setChng]=useState(true);
  const [datas, setDatas] = useState([]);
  const { _id } = useParams();
  const get = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Destination/${_id}`);
      console.log(response.data);
      setDatas([response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get();
  }, [chng]);

  return (
    <>
    <Wrapper>
       {datas.map((v) => (
        <>
        <div className='container p-5 mt-5 con1 ' >
          <div className="row justify-content-center ">
            <div className="col-md-12  ">
  <Carousel images={v.image} />
<center><h2 className='p-2 fw-bolder shadow' >{v.place_name.toUpperCase()} &nbsp;&nbsp;<Link to={`/BookNow/${_id}/d`} className='btn btn-success mb-1 '> Book Now</Link></h2></center>
<h4 className=" fw-semibold " >{v.state} , {v.city}</h4>
<p className="fw-medium" >{v.description}</p>
<h5>Price :<span > &#8377; {v.price}  </span> || Duration : <span>{v.duration}{v.duration===1?" day":" days"}</span> </h5>
<Reviews reviews={v.reviews} name="destinations"  place={v.place_name} setChng={setChng} chng={chng} />
            </div>
          </div> 
</div>
        </>
      ))}
      </Wrapper>
    </>
  );
};

export default ParticularDestination;
