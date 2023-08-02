const express=require('express')
const router=new express.Router();
const Razorpay=require('razorpay')
const Book=require('./model/BookinModel')
const razorpay = new Razorpay({
    key_id: process.env.YOUR_KEY_ID,
    key_secret: process.env.YOUR_KEY_SECRET,
  });
router.post('/orders',async(req,res)=>{
    try {
        const { amount } = req.body;
    
        const options = {
          amount: amount * 100, 
          currency: 'INR',
        };
        const order = await razorpay.orders.create(options);
    
        res.json({
          orderId: order.id,
          razorpayKeyId: process.env.YOUR_KEY_ID,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
    
router.post('/verify',async(req,res)=>{
    const { paymentId, orderId,checkin_date,checkout_date,tour_name,tickets,total_price,email} = req.body;
    console.log(checkin_date)
    console.log(checkout_date)
    console.log(tour_name)
    console.log(tickets)
    console.log(total_price)
    console.log(email)
    try {
      const response = await razorpay.payments.fetch(paymentId);
      console.log(response.order_id);
      if (response.order_id === orderId ) {
        const ob1=new Book({
          tour_name:tour_name,
          email:email,
          checkin_date:checkin_date,
          checkout_date:checkout_date,
          tickets:tickets,
          total_price:total_price
        })
        await ob1.save();
        res.send("ok");
      } else {
        res.status(400).json({ success: false, error: 'Payment verification failed' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Something went wrong' });
    }
})

module.exports=router;