"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomTeacherInfoCard = ({
  href,
  image,
  classNameImg,
  children,
  ...props
}) => {
  return (
    <div
      className="bg-pol-img w-[40%] h-full flex flex-col gap-[20px] pl-[1.5%] text-[20px]"
      {...props}
    >
      <Image
        src={image}
        className={`w-[252px] object-cover ${classNameImg}`}
        alt="Teacher's Image"
      />
      <Link href={href} target="blank" className="text-left w-[61%]">
        <CustomTypography className="text-[#993795] text-[1.2em]">
          {children}
        </CustomTypography>
        <CustomTypography className="text-[0.8em]">
          He is a professional full stack developer since 2017 <br /> (Software
          House).
        </CustomTypography>
      </Link>
    </div>
  );
};

export default CustomTeacherInfoCard;
