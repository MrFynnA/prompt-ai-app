import PromptModel from "@models/promptmodel"
import connectDB from "@utils/database"


export const GET = async(req,context) => {
    console.log('i was called')
    // const uid=params.uid
    // console.log(uid)
    const {params}=context
    const id=params.uid
    if(id){
      console.log(id)
      console.log('i got the id')
    }else{
console.log('i didnt get the id')
    }

      try{
        await connectDB()

          const posts=await PromptModel.find({creator:id}).populate('creator')
          return new Response(JSON.stringify(posts),{status:200})  

      }catch(error){
     return new Response(JSON.stringify({message:'could not get your posts'},{status:500}))
      }

}

