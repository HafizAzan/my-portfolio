"use client";
import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";

const Footer = () => {
  return (
    <>
      <section className="relative flex gap-[42px] items-center h-[293px]">
        <CustomImgArrow
          className="w-full flex justify-end absolute top-[12px]"
          imgClass="w-[70px]"
          src={imageUrl.right_arrow}
        />
        <div className="w-[28%] ml-4 text-[16px]">
          <Image src={imageUrl.footerLogo} alt="Logo" />
          <CustomTypography className="mt-6 text-[0.9em]">
            Our vision is to teach you professional skills through practical
            projects and helping you to get good jobs and share our professional
            knowledge with you.
          </CustomTypography>
        </div>
        <div className="w-[9%] mt-[3.9em]">
          <CustomTypography className="text-[1.3em] mb-6">
            Menu
          </CustomTypography>
          <ul className="flex flex-col gap-3 text-[16px]">
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Demo Videos
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[17%] mt-[6.2em]">
          <CustomTypography className="text-[1.3em] mb-6">
            Social Media Links
          </CustomTypography>
          <ul className="flex flex-col gap-3 text-[16px]">
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                Join in Our Community Group
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[31%] mt-[3.4em]">
          <CustomTypography className="text-[1.3em] mb-6">
            Reach Out to Us
          </CustomTypography>
          <ul className="flex flex-col gap-3 text-[16px]">
            <li>
              <i className="fas fa-phone-alt rotate-[94deg] text-[1.3em] mr-4 text-[#993795]"></i>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                03402322260
              </Link>
            </li>
            <li>
              <i className="fas fa-envelope text-[1.3em] mr-4 text-[#993795]"></i>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                info@squadcodersdev.com
              </Link>
            </li>
            <li>
              <i className="fas fa-map-marker-alt text-[#993795] mr-4 text-[1.3em]"></i>
              <Link
                href="/"
                target="blank"
                className="text-[0.9em] cursor-pointer"
              >
                House No R-46, Sector 5A/4 Near Fresh Tasty Biryani on Madeeha
                Road North Karachi, Pakistan
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <footer className="w-full h-[60px] bg-[#453567] text-white text-[1em] mt-14 flex justify-center items-center">
        Copyright © 2024 SquadCodersDev
      </footer>
    </>
  );
};

export default Footer;
