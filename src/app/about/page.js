"use client";
import CustomButton from "components/CustomButton/CustomButton";
import { CustomTypography } from "components/CustomText/CustomText";
import Link from "next/link";

const page = () => {
  return (
    <>
      <CustomTypography>hi I am Azan Khan</CustomTypography>
      <Link href="./" className="grid place-content-center">
        <CustomButton type="primary">Go To Back</CustomButton>
      </Link>
    </>
  );
};

export default page;
