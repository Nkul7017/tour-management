const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');
const LoginSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true, 
        validate(value){
           
           if(!validator.isEmail(value))
           {
               throw new Error("email is invalid");
           }
    }
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
        required:true
        }

}]
    }
)
LoginSchema.pre("save",async function(next){
    if(this.isModified("password"))
{
    this.password=await bcrypt.hash(this.password,10);
}
next();
})
LoginSchema.methods.generateAuthToken=async function(){
    try{
   let token=jwt.sign({_id:this._id},process.env.Secret_key)
//    console.log(token);
   this.tokens=this.tokens.concat({token:token})
   await this.save();
   return token;
    }
    catch(e)
    {
        console.log(e);
    }
}


module.exports=mongoose.model("Login",LoginSchema)