'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Form from '@components/Form'


const CreatePrompt = () => {
  const {register,formState:{errors},handleSubmit,watch,reset}=useForm()
  const [submitting,setSubmitting]=useState(false)
  const router=useRouter()
const {data:session}=useSession()
  return (
    <div className='w-full flex justify-center'>
    <div className='w-full'>
        <Form
         register={register} 
         type='Create' 
         sumbitHandler={handleSubmit(async(data)=>{
          setSubmitting(true)
          const promptPost={
            prompt:data.prompt,
            userId:session.user.id,
            tag:data.tag
          }
          try{
                  const res=await fetch('api/prompt/new',{
                    method:'POST',
                    body:JSON.stringify(promptPost)
                  })

                  if(res.ok){
                    router.push('/')
                  }
          }catch(error){
            // console.log(error)
          }finally{
          setSubmitting(false)
          }
          // console.log(data)
          reset()
        })} 
         submitting={submitting}
         watch={watch}
         fieldOneProp={'prompt'}
         fieldTwoProp={'tag'}
         /> 
    </div>
    </div>
  )
}

export default CreatePrompt