import { Image } from "@/components/common/Image";
import Link from "next/link";
import React from "react";

const RecommendsSection = () => {
  const recommends = [
    {
      image: "general/post.jpg",
      name: "Joseph Martin",
      userName: "@JosephMartin",
    },
    {
      image: "general/post.jpg",
      name: "Joseph Martin",
      userName: "@JosephMartin",
    },
    {
      image: "general/post.jpg",
      name: "Joseph Martin",
      userName: "@JosephMartin",
    },
  ];
  return (
    <div className="p-4 rounded-2xl border border-borderGray flex flex-col gap-4">
      <h1 className="text-lg font-bold text-textGrayLight">
        {"Who to follow"}
      </h1>
      {recommends.map((item, index) => (
        <div key={index} className="flex justify-between gap-2">
          <div className="flex gap-2 items-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/post.jpg"
              alt="event"
              w={500}
              h={500}
              tr={true}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-textGrayLight">{item.name}</h3>
            <span className="text-xs text-textGray">{item.userName}</span>
          </div>
          </div>
          <button className="rounded-full px-5 text-sm bg-white text-black font-semibold">Follow</button>
        </div>
      ))}
       <Link href="/" className="text-iconBlue hover:underline">
            Show More
        </Link>
    </div>
  );
};

export default RecommendsSection;
