'use client'

import React from 'react'
import Profile from '@components/Profile'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const MyProfile = () => {
  const [posts,setPosts]=useState([])
  const router=useRouter()
  const{data:session}=useSession()
  // console.log(posts)

  const fetchPrompts=async()=>{
  
    // console.log('i run in prompts')
    try{
      const res= await fetch(`/api/users/${session?.user.id}/posts`)
      const data=await res.json()
      if(!res.ok){
        throw new Error('could not get posts')
      }
      setPosts(data)
    }catch(error){
  console.log(error)
    }
    
    
  }
  useEffect(()=>{

    fetchPrompts()
 },[])

  const handleEdit=(promptId)=>{
    router.push(`/update-prompt?id=${promptId}`)
    
  }
  const handleDelete=async(promptId)=>{
          const comfirmDelete=confirm('Are you sure you want to delete this prompt?')
          if(comfirmDelete){
            try{
              const res=await fetch(`api/prompt/${promptId.toString()}`,{
                method:'DELETE'
              })

              setPosts(prev=>{
                const updatedPosts=prev.filter(p=>p._id!==promptId)
                return updatedPosts
              })
              const data=await res.json()
              // console.log(data)
              // fetchPrompts()

            }catch(error){
              // console.log(error.message)
            }
          }
  }
  return (
    <div className='w-full'>
      <Profile
       name='My'
       desc='welcome to your personalized profile page '
       data={posts}  //array of our posts
       handleEdit={handleEdit}
       handleDelete={handleDelete}
       session={session}
      />
    </div>
  )
}

export default MyProfile