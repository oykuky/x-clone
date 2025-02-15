import { menuList } from "@/constants/menuItems";
import Link from "next/link";
import React from "react";
import { Image } from "../common/Image";

export const LeftBar = () => {
  return (
    <div className="sticky top-0 h-screen flex flex-col justify-between py-4">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image path="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>
        {/* Menu Items */}
        <div className="flex flex-col gap-3">
          {menuList.map((item) => (
            <Link
              href={item.link}
              className="flex items-center gap-3 p-2 rounded-full hover:bg-[#181818]"
              key={item.id}
            >
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image path="icons/post.svg" alt="add post" w={24} h={24} />
        </Link>

        <Link
          href="/compose/post"
          className="bg-white text-black rounded-full font-bold py-2 px-16 hidden xxl:block"
        >
          <span>Post</span>
        </Link>
      </div>
      {/* User info area */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full">
            <Image
              path="/general/avatar.png"
              alt="öyküky"
              w={40}
              h={40}
              className="rounded-full"
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Öykü Kaya</span>
            <span className="text-textGray text-sm">@ÖyküKy</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
