import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
const Wrapper=styled.section`
th,td,label{
    color:white;
}
span{
    color:goldenrod;
}
.con{
    background-color:maroon;
}
.con1{
    background-color:maroon;
}
h2{
    color:White;
     text-shadow: 5px 5px 20px black; 
}
`
const BookNow = () => {
   const navigate=useNavigate();
    const {_id,rt}=useParams();
    const [datas,setDatas]=useState("");
    const [datas1,setDatas1]=useState("");
    const name=rt==="d"?"Destination":"Packages"
  const check=async()=>{
    try{
const res=await fetch("http://localhost:5000/booknow",{
  method:"GET",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include"}
  )
if(res.status===401){
navigate('/login', {replace: true})
} 
const data=await res.json();
console.log(data);
if(res.status===200){
  console.log("hello")
setDatas1(data);}
}
    catch(e)
    {
      console.log(e);
    }
  }
    async function get()
    {
        try{
        const {data}=await axios.get(`http://localhost:5000/${name}/${_id}`);
      setDatas(data);}
      catch(e)
      {
        console.log(e);
      }
    }
  useEffect(()=>{
    check();
    get();
  },[])
  useEffect(()=>{
   {
    console.log(datas.price);
    if(value.length===0)
    {
        setValue(0);
    }
    if(value1.length===0)
    {
        setValue1(0);
    }
    let total=(datas.price)*(parseInt(value)+parseInt(value1)-parseInt(value1)*0.2);
   setPrice(total)
}
  })
  var [value,setValue]=useState(0)
  var [value1,setValue1]=useState(0)
  var [value2,setValue2]=useState()
  var [price,setPrice]=useState(0)
  var [msg,setMSg]=useState("")
  async function handlePayment()
  {
    if(value>0&&!date.value=="")
    {
        
        setMSg("")
        const res=await axios.post("http://localhost:5000/orders",{amount:price})
        console.log(res);
        const { orderId, razorpayKeyId } = res.data;
    const options = {
    key: razorpayKeyId,
    amount: price * 100,
    currency: "INR",
    name: "TripIndiaX",
    description: "Payment for Booking",
    order_id: orderId,
    handler: async function (response) {
      try {
        const { razorpay_payment_id, razorpay_order_id } = response;
        // Verify the payment on the server
        const verificationResponse = await axios.post("http://localhost:5000/verify", {
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,_id:_id,
          tour_name:datas.place_name||datas.package_name,
          checkin_date:date.value,
          checkout_date:new Date(new Date(date.value).getTime() + (datas.duration * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
          tickets:{
            adult:value,
            child:value1
          },
          total_price:price,
          email:datas1
        });
        console.log(verificationResponse.data)
        if(verificationResponse.data=="ok")
        {
            navigate('/Booking');
        }
      } catch (error) {
        console.log(error);
      }
    },
    prefill: {
      name: "Nakul Thakur",
      email: "thakurnakul119@gmail.com",
      contact: "7017846627",
    },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
}
    else{
setMSg("* Fill Fields Correctly");
    }
  }
  return (  
    <>
    <Wrapper>
     <div className='container p-5'>
        <div className="row mt-5  ">
            <h1 className='text-center  fw-bolder rounded-pill p-2 bg-dark-subtle '>Book Your Destination Tour</h1>
            <div className="col-md-6 mt-5 con1 p-3 ">
            <h2 className='fw-bold mt-3 ms-5'>Tour Details</h2>
            <table className='mt-3 ms-4 ' cellSpacing={5} cellPadding={5}  >
            <tr>
                <th> <h4><span>{name}:</span></h4></th>
                <td> <h4> {datas.place_name||datas.package_name}</h4></td>
            </tr>
            <tr>
                <th><h4> <span>Duration:</span></h4></th>
                <td> <h4> {datas.duration} days</h4></td>
            </tr>
            <tr>
                <th> <h4><span>Price:</span></h4></th>
                <td> <h4>{datas.price}/ticket </h4></td>
            </tr>
        </table>
            </div>
            <div className="col-md-6 mt-5 con p-3 ">
                <h2  className='fw-bold ms-3'>Select Tickets</h2>
                <p className='mb-0 text-primary fw-bold '>{msg}</p>
                <label htmlFor="adult">For Adult </label>
                <input id='adult' type="number" className='form-control w-50' value={value} onChange={(e)=>setValue(e.target.value)}   min={0} />
                <label htmlFor="child" className='mt-1'>For Child (-20%) </label>
                <input id='child' type="number" className='form-control w-50' value={value1}  onChange={(e)=>setValue1(e.target.value)}  min={0} />
                <label htmlFor="date" className='mt-1'>Check In Date </label>
                <input id='date' type="date" min={new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]} className='form-control w-50' value={value2} name="date"  onChange={(e)=>setValue2(e.target.value)}  />
            </div>
        </div>
        <div className="row mt-5  ">
            <div className="col con p-2 ">
                <h2 className='text-center me-5 '>Total Price :{price}</h2>
            </div>
        </div>
        <div className="row mt-5 justify-content-center ">
            <div className="col-sm-4 ">
               <button className='d-block btn btn-success m-auto' onClick={()=>handlePayment()}>Click For Payment</button>
            </div>
        </div>
     </div>
     </Wrapper>
    </>
  )
}

export default BookNow
