import React,{useState} from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'

const PromptCard = (props) => {
  const {data,handleTagClick,handleEdit,handleDelete}=props
    
  return (
    <div className='prompt_card'>
      <div className='flex justify-between'>

      </div>

    </div>
  )
}

export default PromptCard