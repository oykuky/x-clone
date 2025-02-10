import React from "react";
import { Image } from "../common/Image";
import { PostInfo } from "./PostInfo";
import PostEvents from "./PostEvents";
import { imagekit } from "@/lib/util";
import Video from "../common/Video";


interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

export const PostCard = async() => {
  
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67a73314432c4764161bb769");
  return (
    <div className="p-4 border-b-[1px] border-borderGray">
      <div className="flex items-center gap-1 mb-1 text-sm text-textGray font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path fill="#71767b" d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
        </svg>
        <span>Öyküky Reposted</span>
      </div>
      {/* Post area */}
      <div className="flex gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/* Content*/}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base font-bold">Öykü kaya</h1>
              <span className="text-textGray text-sm">@öyküky</span>
              <span className="text-textGray text-sm">1 day</span>
            </div>
            <PostInfo />
          </div>
          {/* Post Content Area */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellat maiores porro unde aliquam officia libero harum sit
            corporis cupiditate!
          </p>
          {/* <Image path="/general/post.jpg" alt="postImage" w={500} h={500} /> */}
           {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostEvents />
        </div>
      </div>
    </div>
  );
};
