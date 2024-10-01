"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React, { memo } from "react";

const CustomInfoCard = ({ src, label, children, ...props }) => {
  return (
    <div
      className="bg-white w-[30%] h-[300px] flex flex-col justify-center items-center gap-2 text-[15px] 
    box-shadows transition-all ease-in duration-[0.4s] 
    hover:transition-all hover:ease-in hover:duration-[0.4s]"
      {...props}
    >
      <Image src={imageUrl.email_info} />
      <CustomTypography className="text-[#993795] text-[1.7em]">
        {label}
      </CustomTypography>
      <CustomTypography>{children}</CustomTypography>
    </div>
  );
};

export default memo(CustomInfoCard);
