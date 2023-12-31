require('dotenv').config()
require('./db/conn')
const express=require('express')
const cookieParser = require('cookie-parser');
const app=express();
app.use(cookieParser());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://tour-management-j313.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }  

    next();
  });

app.use(express.json());   
const port=process.env.PORT||5000;
const DesRouter=require('./Router/DestinationRouter')
const PacRouter=require('./Router/PackagesRouter')
const LoginRouter=require('./Router/LoginRouter')
const PaymentRouter=require('./Router/PaymentRouter')
const BookingRouter=require('./Router/BookingRouter')
const AuthRouter=require('./Router/auth')
app.use(AuthRouter);
app.use(DesRouter);
app.use(PacRouter);
app.use(LoginRouter);   
app.use(PaymentRouter);
app.use(BookingRouter);

app.listen(port,()=>{
    console.log("listening");
})