"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import { CaretRightOutlined } from "@ant-design/icons";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import AnimationWithGsap from "Gsap/Animations";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import Image from "next/image";
import React from "react";

const Actions = ({ title = "Html/Css Demo Classes", width = "w-[45.4%]" }) => {
  const { boxRef } = AnimationWithGsap();
  return (
    <>
      <section className="w-full relative pt-12">
        <CustomImgArrow
          className="w-full flex justify-end absolute top-[-30px]"
          imgClass="w-[70px]"
          src={imageUrl.right_arrow}
        />
        <main className="action-bg h-[1000px] w-full">
          <div className="container flex flex-col">
            <div className="flex justify-between h-[180px] items-end">
              <div className="w-[60%]">
                <CustomTextWithImage
                  className="!text-[#fff]"
                  image={imageUrl.small_arrow}
                >
                  In Action
                </CustomTextWithImage>
                <hr
                  className={`${width} h-[2px] bg-gray-400 text-gray-400 my-3`}
                />
                <CustomTypography className="text-[#fff] text-[1.8em]">
                  {title}
                </CustomTypography>
              </div>
              <Image src={imageUrl.setting} ref={boxRef} />
            </div>
            <div className="relative mt-[65px] self-center">
              <Image src={imageUrl.video_lap} />
              <div className="absolute left-[47%] top-[40%]">
                <CaretRightOutlined className="flex justify-center items-center bg-gradient-to-b from-[#643e83] to-[#643578] via-[#643578] text-white w-[50px] h-[50px] text-[25px] rounded-[50%] cursor-pointer" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Actions;
