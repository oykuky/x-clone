import React from 'react'
import { Image } from '../common/Image'

export const PostInfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
        <Image path="/icons/infoMore.svg" alt="moreDot" w={16} h={16} />  
    </div>
  )
}
