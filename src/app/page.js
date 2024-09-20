"use client";

import { CustomTypography } from "components/CustomText/CustomText";
import { imageUrl } from "imageConstant/ImagesUrl";
import { HelperFunction } from "utils/helper.function";
import { useMemo } from "react";
import CustomLoader from "components/CustomLoader/CustomLoader";
import CustomButton from "components/CustomButton/CustomButton";
import Image from "next/image";
import AnimationWithGsap from "Gsap/Animations";
import usePosts from "hooks/usePosts";
import useUsers from "hooks/useUsers";
import Link from "next/link";

export default function Home() {
  const { boxRef } = AnimationWithGsap();
  const { GetPostData } = usePosts();
  const { GetUserData } = useUsers();

  const data = useMemo(() => GetPostData?.results?.splice(0, 9), [GetPostData]);
  const user = useMemo(() => GetUserData?.results?.splice(0, 9), [GetUserData]);

  return (
    <>
      <Link href="./about" className="grid place-content-center">
        <CustomButton type="primary">Go To About</CustomButton>
      </Link>
      <CustomLoader />
      <div className="flex gap-[20px] justify-center items-center flex-wrap">
        {data?.length > 0 &&
          data?.map((singleData, index) => {
            return (
              <CustomTypography level={1} key={index}>
                {singleData?.id}
              </CustomTypography>
            );
          })}
        {user?.length > 0 &&
          user?.map((singleUser, index) => {
            return (
              <CustomTypography
                level={1}
                className="capitalize text-[60px] text w-[27vw]"
                key={index}
              >
                {singleUser.username}
              </CustomTypography>
            );
          })}
      </div>
      <CustomTypography level={1} className="font-bold text-[30px]">
        {HelperFunction.Time(new Date().getTime())}
      </CustomTypography>
      <CustomTypography
        level={1}
        className="capitalize text-[60px] text w-[27vw]"
      >
        hi I am Azan
      </CustomTypography>
      <div className="bg-black w-[30vw] h-[30vw] flex justify-center items-center">
        <div
          ref={boxRef}
          className="bg-green-500 w-[50%] h-[50%] rounded-[50%] animated-box"
        ></div>
      </div>
      <Image src={imageUrl.WebPic} width={300} height={300} alt="website pic" />
      <CustomTypography level={1} className="font-bold text-[30px]">
        {HelperFunction.FormatIncome("9000")} RS
      </CustomTypography>
    </>
  );
}
