import PromptModel from "@models/promptmodel"
import connectDB from "@utils/database"

export const GET = async(req,query) => {
    const{params}=query
    try{
        await connectDB()
        
        const post=await PromptModel.findById(params.id).populate('creator')
        if(!post) return new Response(JSON.stringify({message:'prompt not found'},{status:404}));
        return new Response(JSON.stringify(post),{status:200})  
        
        
    }catch(error){
        return new Response(JSON.stringify({message:'could not get posts'},{status:500}))
    }
    
}

//updating
export const PATCH = async(req,query) => {
    const {prompt,tag}=await req.json()
    const{params}=query
    
    try{
        await connectDB()
           
        const existingPrompt=await PromptModel.findById(params.id);
        // if(existingPrompt){
        //     await PromptModel.updateMany({_id:params.id},{$set:{prompt:prompt,tag:tag}})
        // }
        if(!existingPrompt) return new Response({message:'prompt not found'},{status:404}); 
        existingPrompt.prompt=prompt
        existingPrompt.tag=tag
        await existingPrompt.save()
        return new Response(JSON.stringify(existingPrompt),{status:200})  
        //   if(!posts) return new Response({message:'prompt not found'},{status:404});
        // return new Response(JSON.stringify(existingPrompt),{status:404})

      }catch(error){
     return new Response(JSON.stringify({message:'could not update post'}),{status:500})
      }

}
//DELETE

export async function DELETE(req,query){
    console.log('i triggered delete request')
       const{params}=query
       const id=params.id
       console.log(id + 'delete requestid')

       try{
        await connectDB();
        // await PromptModel.findByIdAndRemove(id)
        await PromptModel.deleteOne({_id:id})
        return new Response('Prompt deleted successful',{status:200})
       }catch(error){
        return new Response("Failed to delete prompt",{status:500})
       }
    
}
