 import React, { useEffect, useState } from 'react'
 import { Formik,Form} from 'formik'
 import * as Yup from 'yup'
 import { Link, useNavigate, useParams,} from 'react-router-dom'
 import Styled from 'styled-components'
 import axios from 'axios'
 import Image8 from '../assets/Image8.jpg'
import Field1 from './Field1'
 const Wrapper=Styled.section`
.con1{
 width:100vw;
 height:100vh;
 background-image: url(${Image8});
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
     text-shadow: 2px 2px 10px black
 }
 label{
     color:goldenrod
 }
`;
 function Login({setDisplay}) {
  const navigate=useNavigate()
  const {msg}=useParams("")
  const [msg1,setMsg1]=useState("");
   const FormSchema=Yup.object().shape({
    email:Yup.string().email("Invalid Email").required(),
    password:Yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Invalid Passoword'),
})
   return (
     <>
     <Wrapper>
     <div className='con1 container-fluid d-flex justify-content-center align-items-center' >
        <Formik initialValues={{
            email:"",
            password:""
        }}
        validationSchema={FormSchema}
        onSubmit={async(values, { setSubmitting }) => {
            // console.log(values);
            const res=await axios.post("http://localhost:5000/login",values,{
              withCredentials: true});
            
            if(res.data==="ok")
            {
              // console.log("success");
              setDisplay(false);
             navigate('/', {replace: true})
            }
            else if(res.data==="Invalid"){
              setMsg1("Invalid Credentials");
            }
            setSubmitting(false);}}
          >
        {({isSubmitting})=><Form>
        <h1 className=" text-center  fw-bolder  ">LOGIN</h1>
        <p className=" text-center text-white ">{msg}</p>
        <p className=" text-center text-white ">{msg1}</p>
        <Field1 type="email" name="email" label="Email"/>
        <Field1 type="password" name="password" label="Password"/>
                    <div className="row mt-2 ">
                        <div className="col text-center ">
        {isSubmitting ? (<div>Loading...</div>
          ) : (
            <button className="btn btn-success m-2 " type="submit" disabled={isSubmitting}>Submit</button>
          )}
                            <Link type="button" className="btn btn-primary m-2 " to="/ForgetPassword" >Forget Password</Link>
                            <Link type="button" className="btn btn-info m-2 " to="/SignUp" >Sign Up</Link>
                            </div>
                        </div>
        </Form>}
          </Formik>
          </div>
     
     </Wrapper>
     </>
   )
 }
 
 export default Login
