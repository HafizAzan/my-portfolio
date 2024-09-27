"use client";
import Image from "next/image";
import React, { memo } from "react";

const CustomImgArrow = ({ src, imgClass, className }) => (
  <div className={className}>
    <Image src={src} className={imgClass} />
  </div>
);
export default memo(CustomImgArrow);
