"use client";
import React, { useState } from "react";
import { Image } from "../common/Image";
import NextImage from "next/image";
import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  LocationIcon,
  PollIcon,
  ScheduleIcon,
} from "../../../public/icons";
import { actions } from "@/lib/actions";
import { ImageEditor } from "./ImageEditor";

export const NewPostArea = () => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const previewUrl = image ? URL.createObjectURL(image) : null;
  return (
    <form className="p-4" action={(formData) => actions(formData, settings)}>
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
        <div className="flex-1">
          <textarea
            name="postText"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's Happening?"
            className="w-full resize-none outline-none min-h-[50px] bg-black"
          />
          {/* preview */}
          {image?.type.includes("image") &&previewUrl && (
            <div className="relative rounded-xl overflow-hidden">
              <NextImage
                src={previewUrl}
                alt="preview"
                width={500}
                height={500}
                className={`${
                  settings.type === "original"
                    ? "w-auto h-auto max-w-full max-h-full object-contain"
                    : settings.type === "square"
                    ? "w-full h-full aspect-square object-cover"
                    : "w-full aspect-video object-cover"
                }`}
              />
              <div
                onClick={() => setIsEditOpen(true)}
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white font-semibold py-2 px-4 rounded-lg text-sm cursor-pointer"
              >
                Edit
              </div>
              <div onClick={() => setImage(null)} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex justify-center items-center rounded-full font-bold text-sm cursor-pointer">
                  X
              </div>
            </div>
          )}
          {
            image?.type.includes("video") && previewUrl && (
              <div className="relative">
                <video src={previewUrl} controls/>
                <div onClick={() => setImage(null)} className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex justify-center items-center rounded-full font-bold text-sm cursor-pointer">
                  X
                </div>
              </div>)
          }

          {isEditOpen && previewUrl && (
            <ImageEditor
              onClose={() => setIsEditOpen(false)}
              previewUrl={previewUrl}
              settings={settings}
              setSettings={setSettings}
            />
          )}
          <div className="flex flex-wrap items-center justify-between mt-3 border-t border-borderGray pt-3">
            <div className="flex gap-2 items-center">
              <input
                type="file"
                name="imgfile"
                id="imgFile"
                className="hidden"
                accept="image/*,video/*"
                onChange={handleImgChange}
              />
              <label
                htmlFor="imgFile"
                className="cursor-pointer w-full p-2 rounded-full hover:bg-borderGray"
              >
                <ImageIcon
                  src="/icons/image.svg"
                  alt="Medya"
                  width={20}
                  height={20}
                  className="text-borderGray0"
                />
              </label>

              <div className="p-2 rounded-full hover:bg-borderGray">
                <GifIcon
                  src="/icons/gif.svg"
                  alt="GIF"
                  width={20}
                  height={20}
                  className="text-borderGray0"
                />
              </div>
              <div className="p-2 rounded-full hover:bg-borderGray">
                <PollIcon
                  alt="Anket"
                  width={20}
                  height={20}
                  className="text-borderGray0"
                />
              </div>
              <div className="p-2 rounded-full hover:bg-borderGray">
                <EmojiIcon
                  alt="Emoji"
                  width={20}
                  height={20}
                  className="text-borderGray0"
                />
              </div>
              <div className="p-2 rounded-full hover:bg-borderGray">
                <ScheduleIcon
                  src="/icons/schedule.svg"
                  alt="Zamanlama"
                  width={20}
                  height={20}
                  className="text-borderGray0"
                />
              </div>
              <div className="p-2 rounded-full hover:bg-borderGray">
                <LocationIcon
                  src="/icons/location.svg"
                  alt="Konum"
                  width={20}
                  height={20}
                  className="text-blue-500"
                />
              </div>
            </div>

            <button
              className={`px-4 py-2 rounded-full font-semibold ${
                postText.length > 0
                  ? "bg-white text-black"
                  : "bg-white/35 text-black cursor-not-allowed"
              }`}
              disabled={postText.length === 0}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
