import {Schema,model,models} from 'mongoose'



const promptSchema=new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    prompt:{
        type:"string",
        required:[true,'prompt is required']
    },
    tag:{
        type:String,
       required:[true,'Tag is required']
    },
})


const PromptModel=models.prompt || model('prompt',promptSchema)

export default PromptModel

//now mongoose and mongo db know how the prompts in our database should look like



