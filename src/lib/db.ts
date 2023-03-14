import mongoose, { ConnectOptions } from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()

interface Connection {
  isConnected?: number
}
const connection: Connection = {}
const MONGODB_URI = process.env.MONGODB_URI

async function connectToDatabase() {
  if (connection.isConnected) {
    return
  }
  try {
    if (!MONGODB_URI) {
      console.log("MIssing URI")
      return
    }
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
    } as ConnectOptions)

    connection.isConnected = db.connections[0].readyState
    console.log("MongoDB connected secessfuly")
  } catch (err) {
    console.log(err)
  }
}
export default connectToDatabase