
const Card3 = ({v}) => {
    // console.log(v);
    function handle3(value)
    { 
      // console.log("value"+value)
      var st="";
    for(let i=0;i<value;i++)
    {
     st=st+"⭐"
    }
    // console.log(st)
    return st;
    }
  return (
    <>
<div className="card" style={{height:"37vh"}}>
  <div className="card-header  " style={{backgroundColor:"maroon",color:"goldenrod"}}>
    {v.reviews[0].username} &nbsp; <span className=' float-end'> Rating:{ handle3(v.reviews[0].rating)}</span>
  </div>
  <div className="card-body d-flex align-items-center " style={{backgroundColor:"goldenrod",color:"maroon"}} >
    <p className="card-text">{v.reviews[0].comment}</p>
  </div>
</div>
</> 
  )
}

export default Card3
