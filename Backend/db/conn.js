const mongoose=require('mongoose')
console.log(process.env.DB)
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`)
.then(()=>{
    console.log("Connected Successfully")
})
.catch((e)=>{
    console.log(`error ${e} `)
})