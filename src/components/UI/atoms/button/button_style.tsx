import React from "react";
import styled, { css } from "styled-components";
import { Button_type } from "./button_type";

const StyledButton = styled.button.attrs((props) => ({}))<Button_type>`
  ${(props) => {
    return css`
      background-repeat: no-repeat;
      color: #fff;
      width: 100%;
      height: 45px;
      border: none;
      padding: 5px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;
    `;
  }};
`;

export default StyledButton;
