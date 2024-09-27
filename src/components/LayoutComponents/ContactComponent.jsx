"use client";
import CustomButton from "components/CustomButton/CustomButton";
import CustomInput from "components/CustomInput/CustomInput";
import { CustomTypography } from "components/CustomText/CustomText";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import CustomTextWithImage from "components/CustomTextWithImage/CustomTextWithImage";
import { imageUrl } from "imageConstant/ImagesUrl";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import React from "react";

const ContactComponent = () => {
  return (
    <section className="relative mt-16">
      <CustomImgArrow
        className="w-full flex absolute top-[-35px]"
        imgClass="w-[55px]"
        src={imageUrl.side_arrow}
      />
      <div className="h-contact h-[100vh]">
        <div className="h-[100vh] container">
          <div className="pt-[40px] pb-[60px]">
            <CustomTextWithImage
              className="!text-[#fff]"
              image={imageUrl.small_arrow}
            >
              Contact Us
            </CustomTextWithImage>
            <hr className="w-[23%] h-[2px] bg-gray-400 text-gray-400 my-3" />
            <CustomTypography className="text-[#fff] text-[1.8em]">
              Just Submit This Form
            </CustomTypography>
          </div>
          <form>
            <main className="flex gap-[40px] flex-wrap">
              <div className="w-[42%]">
                <div className="mb-4">
                  <CustomInput
                    name="fullname"
                    className="w-full h-[45px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878]"
                    placeholder="Fullname"
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="email"
                    className="w-full h-[45px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878]"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="phone"
                    className="w-full h-[45px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878]"
                    placeholder="Phonenumber"
                  />
                </div>
                <div className="mb-4">
                  <CustomInput
                    name="education"
                    className="w-full h-[45px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878]"
                    placeholder="Education"
                  />
                </div>
              </div>
              <div className="w-[42%]">
                <CustomTextArea
                  className="w-full !h-[228px] border-none rounded-none !font-inherit placeholder:text-[16px] placeholder:!text-[#b17878] placeholder:tracking-[0.2px]"
                  placeholder="Leave a comment here"
                />
              </div>
            </main>
            <CustomButton
              className="transition-all duration-[0.3s] ease-in-out rounded-[0px] w-[13.8%] 
            h-[3.4vw] text-[1em] text-white bg-[#b067e9]  border-none font-inherit mt-10 font-normal
             sec-shadow contact "
            >
              Contact Now
            </CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
