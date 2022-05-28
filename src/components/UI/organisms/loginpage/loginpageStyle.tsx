import React from 'react';
import styled, { css } from 'styled-components';
import { LoginPageType } from './loginpageType';

const LoginPageStyle = styled.form.attrs((props) => ({}))<LoginPageType>`
${(props) => {
    const middle = props.theme.palette.$color_middle;
return css`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    
    .header{
        margin-top: 0px;
        margin-bottom: 40px;
    }

    .input_line{
        width:50%;
        margin-top : 30px;
        margin-bottom : 0px;
    }

    .login{
        margin-top : 30px;
        margin-bottom : 0px;
        width:50%;
    }
    
`}}
;
`;

export default LoginPageStyle;