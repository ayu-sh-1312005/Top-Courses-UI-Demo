import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col items-center -justify-center space-y-2'>
    <div className='spinner'></div>
      <p className='text-bgDark text-lg font-semibold'>Loading</p>
    </div>
  )
}

export default Loading