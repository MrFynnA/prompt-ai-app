import { useEffect,useState } from "react"
import PromptCard from "./PromptCard"
import { useRouter } from "next/navigation"
import Image from "next/image"


const Profile=({name, desc, data, handleEdit, handleDelete,session})=>{
const sessionId=session?.user.id

  const router=useRouter()
  const[noPromptText,setNoPromptText]=useState(false)
  useEffect(()=>{

      if(data.length===0){
       setTimeout(()=>{
            setNoPromptText(true)
       },[1000])
      }else{
        setNoPromptText(false)
      }
  
  },[data])
  return(
    <section className="w-full">
      <div className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient !text-4xl">{name} Profile</span></h1>
      </div>
        <p className="desc text-left mb-6">{desc}</p>
        <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
         {/* <Image
         src={session?.user.image}
         alt='user_image'
         width={40}
         height={40}
         className='rounded-full object-contain'
         /> */}
        {session && <div className='flex flex-col'>
          <div className="flex items-end gap-2">
          <div className="font-[500] font-satoshi">Username:</div><h3 className='font-satoshi font-semibold text-gray-900'>{session?.user.name}</h3>
          </div>
          <div className="flex items-end gap-2">
          <div className="font-[500] font-satoshi">Email:</div><p className='font-inter text-sm text-gray-500'>{session?.user.email}</p>
          </div>

        </div>}
        </div>
      </div>
        <div className="flex flex-col gap-1 mt-10">
        {sessionId && data && data.length>0 && <div className="font-bold font-satoshi text-md">My Prompts</div>}
        {sessionId && data && data.length>0?<div className="flex flex-wrap gap-4">
        {data && data.length>0 && data.map(prompt=><PromptCard 
        key={prompt._id} 
        data={prompt} 
        handleEdit={handleEdit && handleEdit.bind(null,prompt._id)}
        handleDelete={handleDelete && handleDelete.bind(null,prompt._id)}/>)
        }
        </div>:data.length===0 && noPromptText &&
        <div className="flex flex-col items-center gap-10">
          <div className="text-center font-bold font-satoshi text-2xl italic max-md:text-lg text-neutral-600">You currently have no prompts</div>
          <button onClick={()=>router.push('/create-prompt')} className='black_btn border-none outline-none'>
   Create
</button>
          </div>}
        </div>
    </section>
  )

}


export default Profile