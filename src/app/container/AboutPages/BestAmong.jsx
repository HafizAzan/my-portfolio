"use client";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import React from "react";

const BestAmong = () => {
  return (
    <>
      <section className="h-[400px] mt-7 relative">
        <CustomImgArrow
          className="w-[7%] absolute top-[120px]"
          imgClass="w-[190px]"
          src={imageUrl.side_arrow}
        />
        <main className="container flex justify-center gap-[85px] items-center">
          <div className="w-[40%]">
            <Image src={imageUrl.among_com} />
          </div>
          <div className="w-[40.6%] mb-8">
            <CustomTextWithImage
              className="!text-[#423566]"
              image={imageUrl.purple_arrow}
            >
              About Us
            </CustomTextWithImage>
            <hr className="w-full h-[2px] bg-gray-400 text-gray-400 my-3" />
            <CustomTypography className="text-[#993795] text-[1.8em]">
              Why We Are the Best Among All
            </CustomTypography>
            <CustomTypography className="text-[0.9em] ">
              We are teaching how to code professionally in the web development
              field by creating some practical projects like Web Admin Panels
              (WEBSITES WITH ADMIN PANELS, RESTAURANT MANGEMENT SYSTEMS), Mobile
              Apps and much more and now we have decided to launch that in
              market so if anyone wants to learn programming so you can easily
              contact us by our phone numbers, email or submitting website form.
            </CustomTypography>
          </div>
        </main>
      </section>
      <section className="h-[280px] mt-[110px]">
        <main className="container flex justify-center gap-[136px] items-center mb-8">
          <div className="w-[30%]">
            <CustomTextWithImage
              className="!text-[#423566]"
              image={imageUrl.purple_arrow}
            >
              Our Vision
            </CustomTextWithImage>
            <hr className="w-full h-[2px] bg-gray-400 text-gray-400 my-3" />
            <CustomTypography className="text-[#993795] text-[1.8em]">
              Our Target is Practical base Learning Approach
            </CustomTypography>
          </div>
          <div className="w-[35%]">
            <CustomTypography className="text-[0.9em]">
              Our vision is to teach you professional skills through practical
              projects and helping you to get good jobs and share our
              professional knowledge with you.
            </CustomTypography>
          </div>
        </main>
      </section>
    </>
  );
};

export default BestAmong;
