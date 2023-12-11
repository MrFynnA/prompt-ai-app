'use client'

import {useEffect,useState} from 'react'
import PromptCard from './PromptCard'
import { useForm } from 'react-hook-form'
import PromptcardList from './PromptcardList'
import { usePathname } from 'next/navigation'

const Feed = () => {
  const {register,handleSubmit,formState,reset}=useForm()
  const [posts,setPosts]=useState([])
  const [promptsloading,setPromptsLoading]=useState(false)
  const [refresh,setRefresh]=useState(false)
  const pathName=usePathname()
  // console.log(posts)
  const fetchPrompts=async()=>{
    
    try{
      setPromptsLoading(true)
      const res= await fetch('/api/prompt',{
        cache:'no-store'
      })
      const data=await res.json()
      if(!res.ok){
        throw new Error('could not get posts')
      }
      setPosts(data)
    }catch(error){
      console.log(error.message)
    }finally{
      setPromptsLoading(false)
    }
    
    
  }
  const triggerRefresh=()=>{
    setRefresh(true)
    fetchPrompts()
    setTimeout(()=>{
      setRefresh(false)
    },5000)
  }
  useEffect(()=>{
    
     fetchPrompts()
  
  },[pathName])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
         <input {...register('searchTerm',{required:true})} type='text' required placeholder='search for a tag or a username' className='search_input peer outline-none border-none'/>
      </form>

      <PromptcardList
      data={posts}
      triggerRefresh={triggerRefresh}
      promptsloading={promptsloading}
      refresh={refresh}
      handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed