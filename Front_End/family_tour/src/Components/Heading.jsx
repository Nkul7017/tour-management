import React from 'react'

const Heading = ({heading}) => {
    const styles={color:"goldenrod",textShadow:"2px 2px black","backgroundColor":"maroon"}
  return (
      <>
        <center>
            <h1 className=' mt-5 fw-bolder p-3 ' style={styles} >{heading}</h1>
            </center>
      </>
  )
}
export default Heading
