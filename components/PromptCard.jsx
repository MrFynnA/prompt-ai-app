import React,{useState} from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname,useRouter } from 'next/navigation'
import { CheckIcon } from '@public/assets/icons/CheckedIcons'

const PromptCard = (props) => {
  const {data,handleTagClick,handleEdit,handleDelete}=props
  const{data:session}=useSession()
  const pathName=usePathname()
  const[copied,setCopied]=useState('')
  const[copiedText,setCopiedText]=useState(false)
  const handleCopy=()=>{
    setCopied(data.prompt)
    setCopiedText(true)
    navigator.clipboard.writeText(data.prompt)
    setTimeout(()=>{
     setCopiedText(false)
    },1000)
    setTimeout(()=>{
     setCopied('')
    },8000)
  }
    
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
         <Image
         src={data?.creator?.image}
         alt='user_image'
         width={40}
         height={40}
         className='rounded-full object-contain'
         />
        <div className='flex flex-col'>
          <h3 className='font-satoshi font-semibold text-gray-900'>{data.creator.username}</h3>
          <p className='font-inter text-sm text-gray-500'>{data.creator.email}</p>

        </div>
        </div>
        <div className='copy_btn !bg-slate-300 hover:!bg-white relative' onClick={handleCopy}>
          {copiedText && <div className='absolute text-xs bottom-9'>copied!</div>}
        {copied!==data.prompt?
          <Image
          src={'/assets/icons/copy.svg'}
          width={16}
          height={16}
          alt='profile_image'
          />:<CheckIcon/>}
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{data.prompt}</p>
      {session?.user.id===data?.creator._id && pathName==='/profile' &&(
        <div className='mt-5 flex-center gap-2'>
          <p className='font-inter text-sm text-green-600 cursor-pointer hover:underline'
          onClick={handleEdit}
          >
            Edit
          </p>
          <p className='font-inter text-sm text-red-600 cursor-pointer hover:underline'
          onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
      <p className='font-inter text-sm blue-gradient cursor-pointer' onClick={()=>handleTagClick && handleTagClick(data.tag)}>{data.tag}</p>

    </div>
  )
}

export default PromptCard