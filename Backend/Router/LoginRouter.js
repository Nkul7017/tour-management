const express=require('express')
const bcrypt=require('bcrypt')
const login=require('./model/LoginModel')
const router=new express.Router();

router.post("/signup",async(req,res)=>{
    console.log(req.body)
    try{const ob1=new login(req.body);
   await ob1.save();
    res.send("ok");
    }
catch(e){
    console.log("error"+e);
}
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const res1=await login.findOne({email:email});
        if(res1)
        {
       
            bcrypt.compare(password,res1.password, async function(err, result) {
               if(result){
                const token=await res1.generateAuthToken();
                res.cookie('jwttoken',token,{
                    httpOnly:true
                })
                res.send("ok");
               }
               else{
                res.send("Invalid");
               }
            });
        }
    }
catch(e){
    console.log("error"+e);
}
})
router.post('/forget',async(req,res)=>{
const  {email,opassword,npassword}=req.body;
try{
    const res1=await login.findOne({email:email});
    console.log(res1);
    if(res1)
    {
        bcrypt.compare(opassword,res1.password, function(err, result) {
           if(result)
           {
            res1.password=npassword;
             res1.save();
            res.send("ok");
           }
           else{
            res.send("Invalid");
           }
        });
    }
}
catch(e){
    console.log(e);
}
})
router.get('/logout',(req,res)=>{
res.clearCookie('jwttoken')
res.send("logout");
})
module.exports=router;