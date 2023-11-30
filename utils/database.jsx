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

  dbName:"Bookstore",
  useNewUrlParser:true,
  useUnifiedTopology:true
  })

   isConnected=true
}catch(error){
 console.log(error.message)
}


}


export default connectDB