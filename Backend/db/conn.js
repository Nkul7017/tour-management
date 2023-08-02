const mongoose=require('mongoose')
console.log(process.env.DB)
mongoose.connect(`mongodb://mongodb+srv://thakurnakul119:qwertyuiop123%40@cluster0.k2dgdqj.mongodb.net//${process.env.DB}`)
.then(()=>{
    console.log("Connected Successfully")
})
.catch((e)=>{
    console.log(`error ${e} `)
})