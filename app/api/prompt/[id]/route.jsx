import PromptModel from "@models/promptmodel"
import connectDB from "@utils/database"

export const GET = async(context) => {
    const{params}=context
      try{
        await connectDB()

          const post=await PromptModel.findById(params.id).populate('creator')
          if(!posts) return new Response(JSON.stringify({message:'prompt not found'},{status:404}));
          return new Response(JSON.stringify(post),{status:200})  


      }catch(error){
     return new Response(JSON.stringify({message:'could not get posts'},{status:500}))
      }

}

//updating
export const PATCH = async(req,context) => {
    const {prompt,tag}=await req.json()
    const{params}=context

      try{
        await connectDB()
           
        const existingPrompt=await PromptModel.findById(params.id);
        if(existingPrompt){
            const post=await PromptModel.updateMany({_id:params.id},{$and:[{$set:{prompt:prompt}},{$set:{tag:tag}}]})
            return new Response(JSON.stringify(post),{status:404})
        }
        //   if(!posts) return new Response({message:'prompt not found'},{status:404});
        //   return new Response(JSON.stringify(post),{status:200})  

      }catch(error){
     return new Response(JSON.stringify({message:'could not update post'}),{status:500})
      }

}
//DELETE

export async function DELETE(req,context){
       const{params}=context
       const id=params.id

       try{
        await connectDB();
        await PromptModel.findByIdAndRemove(id)
        return new Response('Prompt deleted successful',{status:200})
       }catch(error){
        return new Response("Failed to delete prompt",{status:500})
       }
    
}
