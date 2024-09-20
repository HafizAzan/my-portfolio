"use client";
import React, { memo } from "react";
import { Button } from "antd";

const CustomButton = ({ type = "", loading = "", children = "", ...props }) => {
  return (
    <Button type={type} loading={loading} {...props}>
      {children}
    </Button>
  );
};

export default memo(CustomButton);
