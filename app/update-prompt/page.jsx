'use client'

import React, { useEffect,useState } from "react"
import { useSearchParams,useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import Form from "@components/Form"


const EditPrompt=()=>{
    const [submitting,setSubmitting]=useState(false)
    const [prompt,setPrompt]=useState()
    const {register,formState:{errors},handleSubmit,watch,reset}=useForm()
    const searchParams=useSearchParams()
    const postId=searchParams.get('id')
    const router=useRouter()
// console.log(prompt)
  useEffect(()=>{
          const getPromptDetails=async()=>{
            const res=await fetch(`/api/prompt/${postId}`)
            const data=await res.json()
            setPrompt({
                prompt:data.prompt,
                tag:data.tag
                })
          }
          if(postId) getPromptDetails()
  },[postId])

  const updatePrompts=async(data)=>{
    const promptPost={
        prompt:data.prompt,
        tag:data.tag
      }
      try{
              const res=await fetch(`api/prompt/${postId}`,{
                method:'PATCH',
                body:JSON.stringify(promptPost),
              })

              if(res.ok){
                router.push('/')
              }
      }catch(error){
        console.log(error)
      }finally{
      setSubmitting(false)
      }
      // console.log(data)
    
    
  }

    return (
      <div className='w-full flex justify-center'>
      <div className='w-full'>
          <Form
           register={register} 
           type='Edit' 
           editData={prompt}
           sumbitHandler={handleSubmit((data)=>{
            setSubmitting(true)
            updatePrompts(data)
            reset()
           })} 
           submitting={submitting}
           watch={watch}
           /> 
      </div>
      </div>
    )                                                                                                                                                                                                                                                       
}

export default EditPrompt