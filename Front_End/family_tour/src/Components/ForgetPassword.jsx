import React,{useState} from 'react'
import { Formik,Form} from 'formik'
import * as Yup from 'yup'
import Styled from 'styled-components'
import Image6 from '../assets/Image6.jpg'
import axios from 'axios'
import Field1 from './Field1'
import { useNavigate } from 'react-router-dom'
const Wrapper=Styled.section`
.con1{
 width:100vw;
 height:110vh;
 background-image: url(${Image6});
 background-size:cover;
 background-repeat: no-repeat;
}
form{
 padding:5vw;
 background-color:maroon;
 box-shadow: 5px 5px 10px black;}
 h1{
    color:white;
    text-shadow: 2px 2px 10px black
}
 span{
    color: blue
}
label{
    color:goldenrod
}
`;
function ForgetPassword() {
  const  navigate=useNavigate();
  const [msg,setMsg]=useState("");
    const FormSchema=Yup.object().shape({
     opassword:Yup.string().required('Password is required')
     .min(8, 'Password must be at least 8 characters')
     .matches(
       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
       'Invalid Passoword'),
       npassword:Yup.string().required('Password is required')
       .min(8, 'Password must be at least 8 characters')
       .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
         'Invalid Password'),
       cpassword:Yup.string().oneOf([Yup.ref('npassword'),null],"Password not match").required("Password is required"),

 })
    return (
      <>
      <Wrapper>
      <div className='con1 container-fluid d-flex justify-content-center align-items-center' >
         <Formik initialValues={{
             email:"",
             opassword:"",
             npassword:"",
             cpassword:""
         }}
         validationSchema={FormSchema}
         onSubmit={async(values, { setSubmitting }) => {
             try{
              const {data}=await axios.post("http://localhost:5000/forget",values);
              if(data=="ok")
              {
                navigate('/login/Password Changed')
                setMsg("")
              }
              else if(data=="Invalid")
              {
                setMsg("Invalid Credentials")
              }
             }
             catch(e){
              console.log(e);
             }
             setSubmitting(false);}}
           >
         {({isSubmitting})=><Form>
         <h1 className=" text-center  fw-bolder  ">Forget Password</h1>
         <p>{msg}</p>
         <Field1 type="email" name="email" label="Email"/>
         <Field1 type="password" name="opassword" label="Old Password"/>
         <Field1 type="password" name="npassword" label="New Password"/>
       <Field1 type="password" name="cpassword" label="Confirm Password"/>
                     <div className="row">
                         <div className="col">
         {isSubmitting ? (<div>Loading...</div>
           ) : (
             <button className="btn btn-success m-2 " type="submit" disabled={isSubmitting}>Submit</button>
           )}
                             </div>
                         </div>
       
         </Form>}
           </Formik>
           </div>
      </Wrapper>
      </>
    )}
    export  default ForgetPassword