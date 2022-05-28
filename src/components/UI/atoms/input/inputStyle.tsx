import React from 'react';
import styled, { css } from 'styled-components';
import { InputType } from './inputType';

const StyledInput = styled.input.attrs((props) => ({}))<InputType>`
  ${(props) => {
    const width = {'small' : '100px' , 'midium' : '200px','large':'500px'}

  return css`
    /* background-repeat: no-repeat;
    
    width: ${width[props.width]};
    height: 45px;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    transition: all 0.3s; 
    display: block;
    border: 1px solid;
    border-color: inherit;
    background-color: #fff;
    appearance: none; */
    width: 100%;
      height: 40px;
      padding: 0px 10px;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      border: 1px solid ;
      border-radius: 0;
      appearance: none;
      will-change: border;

  `}}
  ;
`;

export default StyledInput;


