"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import Image from "next/image";
import React, { memo } from "react";

const CustomTextWithImage = ({
  image,
  imgClass,
  className,
  children,
  ...props
}) => {
  return (
    <CustomTypography
      className={`text-[1.6em] text-white flex gap-3 items-center  ${className}`}
      {...props}
    >
      <Image src={image} className={`${imgClass}`} />
      {children}
    </CustomTypography>
  );
};

export default memo(CustomTextWithImage);
