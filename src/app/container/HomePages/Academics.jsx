"use client";
import CustomArrayImage from "components/CustomArrayImage/CustomArrayImage";
import CustomButton from "components/CustomButton/CustomButton";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextwithImage";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const Academics = () => {
  return (
    <>
      <section className="h-[335px] mt-7">
        <main className="container">
          <div className="flex justify-between items-end mb-8">
            <div className="w-[74%]">
              <CustomTextWithImage
                className="!text-[#423566]"
                image={imageUrl.purple_arrow}
              >
                About Us
              </CustomTextWithImage>
              <hr className="w-[41.2%] h-[2px] bg-gray-400 text-gray-400 my-3" />
              <CustomTypography className="text-[#993795] text-[1.8em]">
                Why We Are the Best Among All
              </CustomTypography>
            </div>
            <Image src={imageUrl.shape} className="w-[170px]" />
          </div>
          <div>
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
      <section className="w-full h-[650px]">
        <div className="flex items-center">
          <CustomImgArrow
            className="w-[5%] !self-start"
            imgClass="w-[40px]"
            src={imageUrl.side_arrow}
          />
          <main className="container !w-[90%]">
            <div className="w-[97%] flex items-end mb-8">
              <div className="w-[85%]">
                <CustomTextWithImage
                  className="!text-[#423566]"
                  image={imageUrl.purple_arrow}
                >
                  Academics
                </CustomTextWithImage>
                <hr className="w-[22%] h-[2px] bg-gray-400 text-gray-400 my-3" />
                <CustomTypography className="text-[#993795] text-[1.8em]">
                  Courses We Offer
                </CustomTypography>
              </div>
              <Link href="/">
                <CustomButton className="border-none !shadow-none  text-[#423566] text-[1em] font-inherit font-normal !bg-transparent">
                  View All Courses
                </CustomButton>
              </Link>
            </div>
            <CustomArrayImage
              className={
                "box-shadows transition-all duration-[0.3s] ease-in cursor-pointer hover:transition-all hover:duration-[0.3s] hover:ease-in"
              }
            />
            <CustomButton
              className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[13%] 
            h-[3.5vw] text-[1em] text-white bg-[#993795]  border-none font-inherit mt-12 font-normal
             sec-shadow onHover "
            >
              Join Us Today
            </CustomButton>
          </main>
        </div>
      </section>
    </>
  );
};

export default memo(Academics);
