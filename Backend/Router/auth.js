const express=require('express')
const router=new express.Router();
const authentication=require('../midddlware/authentication')
const des=require('./model/DestinationModel');
const pac=require('./model/PackagesModel')
router.get("/header",authentication,async(req,res)=>{
    res.send("ok");
})

router.post("/review",authentication,async(req,res)=>{
    try{
    const {name,rating,comment,place}=req.body;
    console.log(name);
    console.log(rating);
    console.log(comment);
    console.log(place);

    const username=req.rootuser.fname+" "+req.rootuser.lname;
    console.log(username);
   if(name==="destinations")
   {
    let res1 = await des.findOneAndUpdate(
        { place_name: place },
        { $push: { reviews: { username, rating, comment } } },
        { new: true }
      );
      console.log(res1);
      res.send("done");
   }
   else if(name==="packages")
   {
    const res1 = await pac.findOneAndUpdate(
        { package_name: place },
        { $push: { reviews: { username, rating, comment } } },
        { new: true }
      );
      console.log(res1);
      res.send("done");
   }}
    catch(e)
    {
        console.log(e);
    }
})

router.get("/booknow",authentication,async(req,res)=>{
    const {email}=req.rootuser;
    console.log(email);
    res.json(email);
})

module.exports=router;
