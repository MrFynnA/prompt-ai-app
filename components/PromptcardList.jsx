import React from 'react'
import PromptCard from './PromptCard'
import Refresh from '@public/assets/icons/Refresh'

const PromptcardList = (props) => {
    const{data,handleTagClick, triggerRefresh, refresh,promptsloading}=props
    const dataAvailable=data.length>0
  return (
    <div className='mt-10 relative'>
          {(dataAvailable || promptsloading) &&<div className='w-full flex justify-end absolute top-[-1rem] z-10'><div className='cursor-pointer bg-neutral-50 p-2 rounded-full' onClick={triggerRefresh}><Refresh className={`${(refresh || promptsloading) && 'animate-spin'}`}/></div></div>}
    <div className='prompt_layout relative'>
    {dataAvailable && data?.map(prompt=><PromptCard key={prompt.id} data={prompt} handleTagClick={handleTagClick}/>)}
    </div>
    </div>
  )
}

export default PromptcardList