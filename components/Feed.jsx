'use client'

import {useEffect,useState} from 'react'
import PromptCard from './PromptCard'
import { useForm } from 'react-hook-form'
import PromptcardList from './PromptcardList'

const Feed = () => {
  const {register,handleSubmit,formState,reset}=useForm()
  const [posts,setPosts]=useState([])
  const [promptsloading,setPromptsLoading]=useState(false)
  const [refresh,setRefresh]=useState(false)
  // console.log(posts)
  const fetchPrompts=async()=>{
    
    try{
      setPromptsLoading(true)
      const res= await fetch('/api/prompt')
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
  const TriggerRefresh=()=>{
    setRefresh(true)
    fetchPrompts()
    setTimeout(()=>{
      setRefresh(false)
    },5000)
  }
  useEffect(()=>{
    
     fetchPrompts()
  
  },[])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
         <input {...register('searchTerm',{required:true})} type='text' required placeholder='search for a tag or a username' className='search_input peer outline-none border-none'/>
      </form>

      <PromptcardList
      data={posts}
      triggerRefresh={TriggerRefresh}
      promptsloading={promptsloading}
      refresh={refresh}
      handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed