const express=require('express')
const Package=require('./model/PackagesModel')
const router=new express.Router();
router.get("/Packages",async(req,res)=>{
   try{
       const res1=await Package.find();
       res.send(res1);
   }
   catch(e){
    console.log("error"+e);
   }
})
router.get("/Packages/:_id",async(req,res)=>{
    try{
        const _id=req.params._id;
         const res1= await Package.findById(_id);
        res.send(res1);
    }
    catch(e){
        console.log(e);
    } 
})
module.exports=router;