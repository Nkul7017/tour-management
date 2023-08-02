const express=require('express');
const Des=require('./model/DestinationModel')
const router=new express.Router();
router.get("/Destination",async(req,res)=>{
    try{
        const res1= await Des.find();
        res.send(res1);
    }
    catch(e){
        console.log(e);
    }  
})
router.get("/Destination/:_id",async(req,res)=>{
    try{
        const _id=req.params._id;
         const res1= await Des.findById(_id);
        res.send(res1);
    }
    catch(e){
        console.log(e);
    } 
})
module.exports=router