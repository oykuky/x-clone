"use server";

import { imagekit } from "./util";

export const actions = async (
  formData: FormData,
  settings: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  // const postText = formData.get("postText") as string;
  const file = formData.get("imgfile") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const transformation = `w-500 ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image")) && {transformation: {
        pre: transformation,
      }},
      customMetadata:{
        sensitive:settings.sensitive,
      }
    },
    function (error, result) {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};
