const mongoose=require('mongoose')
console.log(process.env.DB)
mongoose.connect(`${process.env.DB}`)
.then(()=>{
    console.log("Connected Successfully")
})
.catch((e)=>{
    console.log(`error ${e} `)
})