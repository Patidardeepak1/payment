import {app} from './app.js'
import { config } from 'dotenv';
import Razorpay from 'razorpay'
import { connectDB } from './config/database.js';
connectDB();
config({path:'./config/config.env'});

 export var instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.listen(process.env.PORT,()=> {
 console.log(`server is working on ${process.env.PORT}`);
})