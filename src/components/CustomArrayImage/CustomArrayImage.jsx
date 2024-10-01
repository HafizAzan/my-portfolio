"use client";
import { imageUrls } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React, { memo } from "react";

const CustomArrayImage = ({ className, ...props }) => {
  return (
    <div className="c-arr-img flex flex-wrap gap-[73px] w-full" {...props}>
      {imageUrls?.map((url, index) => {
        return (
          <Image
            key={index}
            src={url}
            className={`bg-white w-[204px] h-[80px] flex justify-center items-center p-[10px] object-contain ${className}`}
          />
        );
      })}
    </div>
  );
};

export default memo(CustomArrayImage);
