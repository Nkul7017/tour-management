import React from 'react'
import axios from 'axios'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import Styled from 'styled-components'
import Image8 from '../assets/Image8.jpg'
import Field1 from './Field1'
import { useNavigate } from 'react-router-dom'
const Wrapper=Styled.section`
.con1{
width:100vw;
height:115vh;
background-image: url(${Image8});
background-size:cover;
background-repeat: no-repeat;
}
form{
  width:30rem;
padding:30px;
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
function Login() {
  const navigate=useNavigate();
  const FormSchema=Yup.object().shape({
  fname: Yup.string().required("Required Field").min(5, "Minimum 5 characters").max(10, "Maximum 10 characters"),
    lname: Yup.string().required("Required Field").min(5, "Minimum 5 characters").max(10, "Maximum 10 characters"),
    email:Yup.string().email("Invalid Email").required(),
   phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits").required("Phone number is required"),
   password:Yup.string().required('Password is required')
   .min(8, 'Password must be at least 8 characters')
   .matches(
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
     'Invalid Password'),
   cpassword:Yup.string().oneOf([Yup.ref('password'),null],"Password not match").required("Password is required"),
})
  return (
    <>
    <Wrapper>
    <div className='con1 container-fluid d-flex justify-content-center align-items-center p-3' >
       <Formik initialValues={{
        fname:"",
        lname:"",
           email:"",
           phone:"",
           password:"",
           cpassword:""
       }}
       validationSchema={FormSchema}
       onSubmit={async(values, { setSubmitting }) => {
         console.log(values);
           try{
           const {data}= await axios.post("http://localhost:5000/signup",values)
          if(data==="ok")
          {
            navigate('/Login/Successfully signed up');
          }
           }
           catch(e){
            console.log(e);
           }
           setSubmitting(false);}}
         >
       {({isSubmitting})=><Form>
       <h1 className=" text-center  fw-bolder  ">SIGN UP</h1>
       <Field1 type="text" name="fname" label="First Name"/>
       <Field1 type="text" name="lname" label="Last Name"/>
       <Field1 type="email" name="email" label="Email"/>
       <Field1 type="number" name="phone" label="Contact"/>
       <Field1 type="password" name="password" label="Password"/>
       <Field1 type="password" name="cpassword" label="Confirm Password"/>
                   <div className="row mt-2 ">
                       <div className="col "> 
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
  )
}

export default Login
