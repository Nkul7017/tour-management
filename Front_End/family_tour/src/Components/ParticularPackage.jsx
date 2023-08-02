import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Carousel from './Carousel';
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
th{
    border-right:2px dotted black;
}
`
const ParticularPackage = () => {
  const [chng,setChng]=useState(true);
  const [datas, setDatas] = useState([]);
  const { _id } = useParams();
  const get = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/Packages/${_id}`);
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
<h2 className=' text-center p-2 fw-bolder p-2 shadow'>{v.package_name.toUpperCase()} &nbsp; <center><Link to={`/BookNow/${_id}/p`} className='btn btn-success mt-4 '>Book Now</Link></center></h2>
<table className='  table-responsive'  cellPadding={10} cellSpacing={10} >
    <tr>
{v.destinations.map((v1)=>
    <>
        <th>{v1.place_name} &nbsp; <span> {v1.city}, {v1.state} </span></th>
    </>
)}
    </tr>
  </table>
<p className="fw-medium" >{v.description}</p>
<h5>Price :<span > &#8377; {v.price}  </span> || Duration : <span>{v.duration}{v.duration===1?" day":" days"}</span> </h5>
<Reviews reviews={v.reviews} name="packages" place={v.package_name} setChng={setChng} chng={chng}  />
            </div>
          </div> 
</div>
        </>
      ))}
      </Wrapper>
    </>
  );
};

export default ParticularPackage;
