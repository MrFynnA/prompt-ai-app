import mongoose from "mongoose";


let isConnected=false

const connectDB=async()=>{
// mongoose.set('strictQuery',true)

if(isConnected){
    console.log('connected to mongo')
    return
}

try{
  await mongoose.connect(process.env.MONGODB_URI,{

  dbName:"promptos",

  })

   isConnected=true
}catch(error){
 console.log(error.message+' cant connect to mongo')
}


}


export default connectDB