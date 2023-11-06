"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession,getProviders} from 'next-auth/react'


const Nav = () => {
    const userLoggedIn=true
    const[providers,setproviders]=useState(null)
    const[toggleDropDown,settoggleDropDown]=useState(false)
    useEffect(()=>{
         const setProvider=async()=>{
            const providerResponse=await getProviders()
            setproviders(providerResponse)
         }
         setProvider()
    },[])
    
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
            src='/assets/images/logo.svg'
            alt="Promptos"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>Promptos</p>
        </Link>
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
         {userLoggedIn ?(
            <div className='flex gap-3 md:gap-5'>
<Link href='/create-prompt' className='black_btn'>
   Create Post
</Link>
<button type='button' onClick={()=>signOut()} className='outline_btn'>
   Sign Out
</button>
<Link href='/profile'>
   <Image src='/assets/images/logo.svg'
   width={37}
   height={37}
   className='rounded-full'
   alt='profile'
   />
</Link>
            </div>
         ):(
            <> 
           {providers && Object.values(providers).map(providers=>(
            <button key={providers.name} type='button' onClick={()=>signIn(providers.id)}>Sign In</button>
           ))}
            </>
         )}
        </div>
        {/* mobile Navigation */}
        <div className='sm:hidden flex relative'>
          {userLoggedIn ? (
          <div className='flex'>
            <Image src='/assets/images/logo.svg'
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
                        <Link href={'/profile'}
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
           <button key={providers.name} type='button' onClick={()=>signIn(providers.id)}>Sign In</button>
          ))}
           </>
          
          }
        </div>

    </nav>
  )
}

export default Nav