"use client";
import { Typography } from "antd";
import React from "react";

export const CustomTypography = ({ level = 1, children, ...props }) => {
  return (
    <Typography level={level} {...props}>
      {children}
    </Typography>
  );
};
