import connectDB from "@utils/database"


export async function POST(req){
    const data=await req.json()
    console.log(data)
    try{

    }catch{
        
    }

    return new Response(JSON.stringify(data))

}