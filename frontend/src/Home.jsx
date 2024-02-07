import React from 'react'
import { Box,Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from 'axios'
function Home() {
    const checkoutHandler=async(amount)=>{
      const {data:{key}}=await axios.get("http://www.localhost:4000/api/getkey")
    const {data:{order}}=await axios.post("http://localhost:4000/api/checkout",{
       amount    
    })
    const options = {
     key,
      amount: order.amount,
      currency: "INR",
      name: "Programmer",
      description: "RazorPay",
      image: "",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
          name: "Deepak Patidar",
          email: "deepak2025patidar@gmail.com",
          contact: "9713402267"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  console.log(razor);
  razor.open();
    }
  return (
    <Box>
        <Stack  alignItems={'center'} justifyContent={'center'} direction={'row'}>
           <Card amount={50} img={'data:image/jpeg;base64,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'} checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  )
}

export default Home
