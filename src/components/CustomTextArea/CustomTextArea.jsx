"use client";

import TextArea from "antd/es/input/TextArea";
import React, { memo, useState } from "react";

const CustomTextArea = ({
  onChange = () => {},
  rows = 7,
  children,
  ...props
}) => {
  const [state, setState] = useState("azan Khan");
  return (
    <>
      <TextArea
        rows={rows}
        value={state}
        placeholder={children}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default memo(CustomTextArea);
