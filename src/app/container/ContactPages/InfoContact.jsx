import CustomImgArrow from "components/CustomImgArrow/CustomImgArrow";
import { imageUrl } from "imageConstant/ImagesUrl";
import React from "react";
import CustomInfoCard from "components/CustomInfoCard/CustomInfoCard";

const InfoContact = () => {
  return (
    <section className="h-[400px] mt-7 relative">
      <CustomImgArrow
        className="w-[7%] absolute top-[80px]"
        imgClass="w-[190px]"
        src={imageUrl.side_arrow}
      />
      <main className="container flex justify-center gap-[85px] items-center">
        <CustomInfoCard src={imageUrl.email_info} label="Email">
          <a
            href="mailto:info@squadcodersdev.com"
            className="!text-[#993795] text-[1.1em]"
          >
            info@squadcodersdev.com
          </a>
        </CustomInfoCard>
        <CustomInfoCard src={imageUrl.phone_info} label="Phone">
          <a href="tel:+923402322260" className="!text-[#993795] text-[1.1em]">
            03402322260
          </a>
          <br />
          <a href="tel:+923452071202" className="!text-[#993795] text-[1.1em]">
            03452071202
          </a>
        </CustomInfoCard>
      </main>
    </section>
  );
};

export default InfoContact;
