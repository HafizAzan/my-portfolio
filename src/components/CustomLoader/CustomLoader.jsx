"use client";
import { memo } from "react";
import "./CustomLoader.css";

const CustomLoader = ({ size = "large", ...props }) => {
  return (
    <div className="bg-sky-300 flex justify-center items-center w-full h-full">
      <div className="loader"></div>
    </div>
  );
};

export default memo(CustomLoader);
