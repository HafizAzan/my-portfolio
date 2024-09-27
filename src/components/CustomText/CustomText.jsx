"use client";
import { Typography } from "antd";
import React from "react";

export const CustomTypography = ({ level = null, children, ...props }) => {
  return (
    <Typography level={level} {...props}>
      {children}
    </Typography>
  );
};
