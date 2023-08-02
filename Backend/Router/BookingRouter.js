const express=require('express');
const Book=require('./model/BookinModel') 
const authentication=require('../midddlware/authentication')
const router=new express.Router();
router.post("/booking",authentication,async(req,res)=>{
    try{
        console.log(req.rootuser.email)
        const res1= await Book.find({email:req.rootuser.email});
        console.log(res1);
        res.send(res1);
    }
    catch(e){
        console.log(e);
    }  
})
module.exports=router