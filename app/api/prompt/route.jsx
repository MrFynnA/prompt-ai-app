import PromptModel from "@models/promptmodel"
import connectDB from "@utils/database"

export const GET = async() => {
      try{
        await connectDB()

          const posts=await PromptModel.find().populate('creator')
          return new Response(JSON.stringify(posts),{status:200})  

      }catch(error){
     return new Response(JSON.stringify({message:'could not get posts'},{status:500}))
      }

}
