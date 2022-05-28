import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
// 브랜드 아이콘
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
 // outline 타입 아이콘
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import {Header} from "../../molecules"
import RegisterPageStyle from './registerpageStyle';
import { Input,Button, Select } from '../../atoms';

const RegisterPageComponent: React.FC<any> = (props) => {
return (
<RegisterPageStyle>
    <div className={'header'} >
        <Header />

    </div>
        <div className={"Main"}>
        회원가입
    <div className={"input_box"}>
    아이디
        <Input placeholder={"ID"}/>
    </div>
    <div className={"input_box"}>
        비밀번호
        <Input placeholder={"password"} type={'password'}/>
    </div>
    <div className={"input_box"}>
        비밀번호 재확인
        <Input placeholder={"password_check"} type={'password'}/>
    </div>
    <div className={"input_box"}>
        이름
        <Input placeholder={"이름"}/>
    </div>
    <div className={"male"} >
        성별
    <Select item={ ['남자', '여자']}/>
    </div>
    <div className={"button_box"}>
                <Button>
                    회원 가입
                </Button>
            </div>
        </div>
    <div className={"footer"} >
        footer
        </div>
</RegisterPageStyle>
);
};

export default RegisterPageComponent;