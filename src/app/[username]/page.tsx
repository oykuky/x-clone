
import { Image as ImageComponent } from '@/components/common/Image'
import { Feed } from '@/components/feed/Feed'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserPage = () => {
  return (
<div className="">
      {/* TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
           <ImageComponent path='icons/back.svg' alt='back' w={24} h={24}/>
        </Link>
        <h1 className="font-bold text-lg">Oykuky</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONTAINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
          <Image src='/general/cover.jpg' alt='coverImg' width={600} height={600} />
          </div>
          {/* AVATAR */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image src="/general/avatar.png" alt="" width={400} height={400} />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComponent path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComponent path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComponent path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME*/}
          <div className="">
            <h1 className="text-2xl font-bold">Oykuky</h1>
            <span className="text-textGray text-sm">@oykuWebDev</span>
          </div>
          <p>Oykuky Youtube Channel</p>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <ImageComponent
                path="icons/userLocation.svg"
                alt="location"
                w={20}
                h={20}
              />
              <span>USA</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageComponent path="icons/date.svg" alt="date" w={20} h={20} />
              <span>Joined May 2021</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">400</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      <Feed />
    </div>






  )
}

export default UserPage
