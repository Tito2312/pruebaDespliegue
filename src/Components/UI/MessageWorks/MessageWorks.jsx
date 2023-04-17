import React from 'react'

export const MessageWorks = ({content, style}) => {
  return (
    <div className={style}>
      <p className='message'>{content}</p>
    </div>
  )
}