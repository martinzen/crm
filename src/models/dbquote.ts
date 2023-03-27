// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from '@/lib/db'
import Quote from '@/pages/api/quote';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase()
  switch (req.method) {
    case "GET":
        console.log("Getting user")
        
        break;
    case "PUT":
        console.log("Quote Entered")
        const {firstName,lastName,mobile,email,installationAddress,NMI,meterNumber,electricityRetailer,electricityDistribution,numberOfPanelsSold,roofType,paymentOptions,story,phase,salesPersonName,numberOfTiltedPanels,note,postcode}=req.body
          /* */
        const quote = await Quote.findOneAndUpdate({email},{firstName,lastName,mobile,email,installationAddress,NMI,meterNumber,electricityRetailer,electricityDistribution,numberOfPanelsSold,roofType,paymentOptions,story,phase,salesPersonName,numberOfTiltedPanels,note,postcode},{new:true,upsert:true,setDefaultsOnInsert:true}) 
        /**/
        console.log("QUOTE ", quote)
        break;
      

    default:
        break;
  }
  res.status(200).json({ name: 'John Doe' })
}
