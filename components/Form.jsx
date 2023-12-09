import React from 'react'
import Link from 'next/link'

const Form = (props) => {
  const { register, type, sumbitHandler, submitting,fieldOneProp,fieldTwoProp,editData}=props
  return (
    <section  className='flex-start flex-col w-full max-w-full'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{type} Post </span></h1>
      <p className='desc text-left max-w-md'>
     {type} and share amazing prompts with the world
      </p>
      <form 
      onSubmit={sumbitHandler}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>
          <textarea
          // value={''}
          {...register('prompt',{required:true})}
          placeholder='write your prompts here...'
          className='form_textarea resize-none'
          defaultValue={editData && editData.prompt}

          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag
            <span className='font-normal'> (#product, #webdev, #idea)</span>
          </span>
          <input
          // value={''}
          {...register('tag',{required:true})}
          placeholder='#tag'
          className='form_input'
          defaultValue={editData && editData.tag}
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
          cancel
          </Link>
          <button type='submit' disabled={submitting} className='px-5 py-1.5 text-sm bg-primary-orange rounded-lg text-white shadow-md'>
            {submitting ? `${type}...`:type}
          </button>
        </div>
      </form>
      </section>
  )
}

export default Form