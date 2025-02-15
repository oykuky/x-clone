import { Image } from "@/components/common/Image";
import Link from "next/link";
import React from "react";

const topics = [
  {
    title: "Technology • Trending",
    subTitle: "OpenAI",
    posts: "20K posts",
  },
  {
    title: "Technology • Trending",
    subTitle: "GPT-3",
    posts: "40K posts",
  },
  {
    title: "Technology • Trending",
    subTitle: "WEB-3",
    posts: "10K posts",
  },
  {
    title: "Technology • Trending",
    subTitle: "Cursor",
    posts: "70K posts",
  },
];
const Tags = () => {
  return (
    <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-3">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/post.jpg"
            alt="event"
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Starry Night
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {topics.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-textGray text-sm">{item.title}</span>
          </div>
          <h2 className="text-textGrayLight font-bold">{item.subTitle}</h2>
          <span className="text-textGray text-sm">{item.posts}</span>
        </div>
      ))}
      <Link href="/" className="text-iconBlue hover:underline">
        Show More
      </Link>
    </div>
  );
};

export default Tags;
