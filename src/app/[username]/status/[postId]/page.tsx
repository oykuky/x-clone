import { Image } from '@/components/common/Image'
import { PostCard } from '@/components/feed/PostCard'
import Comments from '@/components/feed/Comments'
import Link from 'next/link'
import React from 'react'

const PostPage = () => {
  return (
    <div>
       <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
           <Image path='icons/back.svg' alt='back' w={24} h={24}/>
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
        <PostCard type='status'/>
        <Comments/>
    </div>
  )
}

export default PostPage