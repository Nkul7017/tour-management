import React from 'react'
import {Field,ErrorMessage } from 'formik'
const Field1 = ({name,type,label}) => { 
  return (
    <>
      <div className="row">
        <div className="col">       
       <label htmlFor={name} className="fw-bold">{label}</label>
       <Field type={type} placeholder="Enter..." name={name} id={name} className="form-control border-2 border-black border-opacity-50"  />
       <ErrorMessage name={name}/>
       </div>
       </div>
    </>
  )
}

export default Field1
