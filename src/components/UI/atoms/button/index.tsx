import ButtonComponent from "./button";
import React, { useEffect, useState, useRef } from "react";

export interface ButtonParamsType {}

const Button: React.FC<ButtonParamsType> = (props, {}: ButtonParamsType) => {
  return (
    <>
      <ButtonComponent {...props} />
    </>
  );
};

export default Button;
