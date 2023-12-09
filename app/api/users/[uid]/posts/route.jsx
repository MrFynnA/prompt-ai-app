import PromptModel from "@models/promptmodel"
import connectDB from "@utils/database"


export const GET = async(req,query) => {
    // const uid=params.uid
    // console.log(uid)
    const {params}=query
    const id=params.uid
      try{
        await connectDB()

          const posts=await PromptModel.find({creator:id}).populate('creator')
          return new Response(JSON.stringify(posts),{status:200})  

      }catch(error){
     return new Response(JSON.stringify({message:'could not get your posts'},{status:500}))
      }

}

