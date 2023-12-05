import React from 'react'
import PromptCard from './PromptCard'

const PromptcardList = (props) => {
    const{data,handleTagClick}=props
  return (
    <>
    {data && data.map(card=><PromptCard key={data.id} data={data} handleTagClick={handleTagClick}/>)}
    </>
  )
}

export default PromptcardList