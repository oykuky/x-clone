"use client";
import React from "react";
import { urlEndpoint } from "@/constants/endpoints";
import { IKImage } from "imagekitio-next";

/**
 * @component Image
 * A reusable image component that integrates with the ImageKit library for optimized image loading and transformations.
 *
 * @param {Object} props - Props for the Image component.
 * @param {string} props.path - The path of the image in the ImageKit storage.
 * @param {number} [props.w] - The width of the image (optional).
 * @param {number} [props.h] - The height of the image (optional).
 * @param {string} props.alt - The alt text for the image, used for accessibility and SEO.
 * @param {boolean} [props.tr] - If true, applies transformation settings for width and height (optional).
 * @param {string} props.className - Additional CSS classes to style the image.
 *
 * @example
 * <Image
 *   path="/examplepath"
 *   w={300}
 *   h={200}
 *   alt="Example"
 *   tr={true}
 *   className="rounded-full"
 * />
 */

type ImageProps = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  tr?: boolean;
  className?: string;
};

export const Image = ({ path, h, w, alt, tr, className }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      {...(tr
        ? { transformation: [{ height: `${w}`, width: `${h}` }] }
        : { width: w, height: h })}
      className={className}
    />
  );
};
