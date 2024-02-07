import { VStack ,Box, Heading,Text} from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
function PaymentSucees() {
    const secarchQuery=useSearchParams()[0]
    const refrenceno=secarchQuery.get("reference")
  return (
 <Box>
    <VStack h='100vh' justifyItems={"center"}>
        <Heading transform={"uppercase"} justifyContent={"center"} alignContent={"center"}>
       Thank you for Donation .
       <br/>
       Have Good Day
        </Heading>
        <Text>
            refrence NO.{refrenceno}
        </Text>
    </VStack>
 </Box>
  )
}

export default PaymentSucees
