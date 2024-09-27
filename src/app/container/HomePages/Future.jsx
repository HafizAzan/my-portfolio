"use client";
import React from "react";
import CustomButton from "components/CustomButton/CustomButton";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";

const Future = ({
  className,
  src,
  show,
  con,
  height = "h-[57%]",
  width,
  children,
  ...props
}) => {
  return (
    <>
      <section className={`bg-img h-[100vh] w-full ${className}`} {...props}>
        <div
          className={`container h-screen flex justify-between items-center ${con}`}
        >
          <div className="w-[40%] text-[18px] ml-4">
            {children}

            {show === false ? (
              <>
                <CustomTypography className="text-[2.2em] text-white leading-[50px] tracking-[1px] mb-5">
                  Future Challenges in Software Engineering
                </CustomTypography>
                <CustomTypography className="text-[0.8em] text-white">
                  Push your web development skills to the next level with
                  experts
                </CustomTypography>
                <Link href="/">
                  <CustomButton
                    className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[37%] border-none 
            h-[45px] text-[0.9em] text-[#423566] font-inherit mt-6 font-normal
             box-shadow hover"
                  >
                    Browse Courses
                  </CustomButton>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={`${height} w-[42%]`}>
            <Image src={src || imageUrl.comp} className={`w-[542px]`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
