const mongoose=require('mongoose')
const validator=require('validator')
const BookingSchema=new mongoose.Schema({
    email:{
        type:String, 
        validate(value){
           
           if(!validator.isEmail(value))
           {
               throw new Error("email is invalid");
           }
    }},
    tour_name:{
    type:String,
    required:true,
},
checkin_date:{  
    type:String,
    required:true
},
checkout_date:{
    type:String,
    required:true
},
tickets:{
    adult:{
        type:Number,
        required:true
    },
    child:{
        type:Number,
        required:true
    }
},
total_price:{
    type:Number,
    required:true
}})
module.exports=mongoose.model("Booking",BookingSchema);