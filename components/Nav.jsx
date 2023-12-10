"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession,getProviders} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';




const Nav = () => {
    const userLoggedIn=true
    const[providers,setproviders]=useState(null)
    const{data:session}=useSession()
    const router=useRouter()
    const[toggleDropDown,settoggleDropDown]=useState(false)
    useEffect(()=>{
         const setProvider=async()=>{
            const providerResponse=await getProviders()
            setproviders(providerResponse)
         }
         setProvider()
    },[])


  async function request(){
   const user={
      firstname:'nk daddr',
      age:Math.random()
   }
   try{
      const res =await fetch('/api/users',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{'content-type':'application/json'}
     })
const data=await res.json()
     console.log(data)
     if(!res.ok){
throw new Error('server error')
     }
   }catch(error){
      console.log(error.message)
   }
   // console.log(await res.json())
  }

 

   useEffect(()=>{
//   async function request(){
//    const user={
//       name:'fynn'
//    }
//     const res=await fetch('http://localhost:3001/api/users',{
//       method:'GET',
     
//     })
//     console.log(await res.json())
//   }


//   request()
   },[])   

   // alert(session?.user.email)
   // console.log(session?.user.email)
   // console.log(session?.expires)
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
            src='/assets/images/sitelogo.png'
            alt="Promptos"
            width={35}
            height={35}
            className='object-contain'
            />
            <p className='logo_text !font-inter'>Promptos</p>
        </Link>
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
         {session?.user ?(
            <div className='flex gap-3 md:gap-5'>
<button onClick={()=>router.push('/create-prompt')} className='black_btn border-none outline-none'>
   Create Post
</button>
{/* <Link href='/create-prompt' onClick={request} className='black_btn'>
   Create Post
</Link> */}
<button type='button' onClick={()=>{signOut({redirect:false})
router.push('/')

}} className='outline_btn'>
   Sign Out
</button>
<Link href='/profile'>
   <Image src={session?.user?.image}
   width={37}
   height={37}
   className='rounded-full'
   alt='profile'
   />
</Link>
{/* <img src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile'></img> */}
            </div>
         ):(
            <> 
            
           {providers && Object.values(providers).map(providers=>(
            <button key={providers.name} className='black_btn' type='button' onClick={()=>signIn(providers.id)}>Sign In</button>
           ))}
            </>
         )}
        </div>
        {/* mobile Navigation */}
        <div className='sm:hidden flex relative'>
          {session?.user ? (
          <div className='flex'>
            <Image src={session?.user?.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                  onClick={()=>settoggleDropDown(prev=>!prev)}
                  />
                  {toggleDropDown && (
                     <div className='dropdown'>
                        <Link href={'/profile'}
                        className='dropdown_link'
                        onClick={()=>settoggleDropDown(false)}
                        >Profile</Link>
                        <Link href={'/create-prompt'}
                        className='dropdown_link'
                        onClick={()=>settoggleDropDown(false)}
                        >Create Prompt</Link>
                        <button onClick={()=>{
                           settoggleDropDown(false)
                           signOut()
                        }} className='mt-5 w-full black_btn'>Sign Out</button>
                     </div>
                  )}
          </div>
          ):    <> 
          {providers && Object.values(providers).map(providers=>(
           <button key={providers.name} className='black_btn' type='button' onClick={()=>signIn(providers.id)}>Sign In</button>
          ))}
           </>
          
          }
        </div>

    </nav>
  )
}

export default Nav