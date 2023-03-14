// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from '@/lib/db'
import User from '@/models/User';
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
        console.log("Creating user")
        const {name,email}=req.body
        const user = await User.findOneAndUpdate({email},{name,email},{new:true,upsert:true,setDefaultsOnInsert:true}) 
        console.log("USER ", user)
        break;
      
  
    default:
        break;
  }
  res.status(200).json({ name: 'John Doe' })
}
