require('dotenv').config()
require('./db/conn')
const cors=require('cors')
const express=require('express')
const cookieParser = require('cookie-parser');
const app=express();
app.use(cookieParser());
app.use(cors({
  origin: 'https://tour-management-system-0qjl.onrender.com',
  credentials: true,
  }));
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