'use client'

import {useEffect,useState} from 'react'
import PromptCard from './PromptCard'
import { useForm } from 'react-hook-form'
import PromptcardList from './PromptcardList'

const Feed = () => {
  const {register,handleSubmit,formState,reset}=useForm()
  const [posts,setPosts]=useState([])
  console.log(posts)

  useEffect(()=>{
      const fetchPrompts=async()=>{

        try{

          const res= await fetch('/api/prompt')
          const data=await res.json()
          if(!res.ok){
            throw new Error('could not get posts')
          }
          setPosts(data)
        }catch(error){
             console.log(error.message)
        }
         

      }
     fetchPrompts()
  
  },[])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
         <input {...register('searchTerm',{required:true})} type='text' required placeholder='search for a tag or a username' className='search_input peer outline-none border-none'/>
      </form>

      <PromptcardList
      data={posts}
      handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed