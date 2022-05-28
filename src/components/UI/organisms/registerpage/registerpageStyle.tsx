import React from 'react';
import styled, { css } from 'styled-components';
import { RegisterPageType } from './registerpageType';

const RegisterPageStyle = styled.div.attrs((props) => ({}))<RegisterPageType>`
${(props) => {
    const middle = props.theme.palette.color_middle;
return css`


.header{
    position: fixed;
    top:0;
    width: 100%;
    margin-bottom: 40px;
}
.Main{
   margin-top: 20px;

}
.input_box{
    width: 100%;
   margin-top: 20px;
}
.button_box{
    margin-top: 20px;
}
.footer{
    width: 100%;
	height: 10px; /* 내용물에 따라 알맞는 값 설정 */
	bottom: 0px;
	position: absolute;
    background-color: blue;
}
.male{
    margin-top: 20px;
}
`}}
;
`;

export default RegisterPageStyle;