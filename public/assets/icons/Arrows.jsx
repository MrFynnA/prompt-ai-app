import React from 'react'


export function ScrollTopArrow(props) {
  const {className,pathclassName}=props
  return (
    <div>
      <svg className={className} width={'2rem'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path className={pathclassName} fill='black' d="m9.71 17.71 6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-7-7a1 1 0 0 0 -1.42 0l-7 7a1 1 0 0 0 1.42 1.42z"></path><path className={pathclassName} fill='black' d="m16.71 14.29a1 1 0 0 0 -1.42 0l-7 7a1 1 0 0 0 1.42 1.42l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path></g></svg>
    </div>
  )
}

export default ScrollTopArrow

