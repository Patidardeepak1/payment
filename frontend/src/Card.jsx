import React from 'react'
import {Image,Text,Button ,VStack} from '@chakra-ui/react'

function Card({amount,img,checkoutHandler}) {
  return (
   <VStack>
    <Image  src={img} boxSize={"64"} objectFit={'cover'}/>
    <Text>{amount}</Text>
    <Button onClick= {()=>checkoutHandler(amount)} >Donate Now</Button>
   </VStack>
  )
}

export default Card
