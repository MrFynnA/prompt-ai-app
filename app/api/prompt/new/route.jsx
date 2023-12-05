import connectDB from "@utils/database"
import PromptModel from "@models/promptmodel"


export async function POST(req){
    const data= await req.json()
    console.log(data)
    // return new Response(JSON.stringify(data))
    try{
      await connectDB()
      const newPrompt=new PromptModel({
        creator:data.userId,
        prompt:data.prompt,
        tag:data.tag
      })
      await newPrompt.save()
      return new Response(JSON.stringify(newPrompt,{status:201}))
    }catch(error){
          return new Response(JSON.stringify({message:'failed to create prompt'},{status:500}))
    }

}