"use client";

import { Input } from "antd";
import React, { memo, useState } from "react";

const CustomInput = ({ onChange = () => {}, children, ...props }) => {
  const [state, setState] = useState("azan");
  return (
    <>
      <Input
        value={state}
        placeholder={children}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default memo(CustomInput);
