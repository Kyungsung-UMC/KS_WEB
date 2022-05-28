import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';// fill 타입 아이콘
 // outline 타입 아이콘// HOC

import { Header } from '../../molecules';
import {Input,Button} from '../../atoms' ;
import LoginPageStyle from './loginpageStyle';

const LoginPageComponent: React.FC<any> = (props) => {
  
return (
    
   <div>

    <LoginPageStyle>
        <div className={"header"}>
        <Header/>
        </div>
            <div className={"input_line"} >
                <Input placeholder={"ID"}/>
            </div>
            <div className={"input_line"} >
                <Input placeholder={"Password"} style ={{width:'medium'}} type={'password'}/>
            </div>
            <div className={"login"}>
                <Button children={'login'} type={'submit'} >
                    login
                </Button>
            </div>
            
            <div className={"login"}>
                <Button children={'register'} type={'submit'} >
                    register
                </Button>
            </div>
            <div className={"login"}>
                <Button children={'register'} type={'submit'} >
                    Github 연동
                </Button>
            </div>
           
        </LoginPageStyle>
   </div>
        
   
);
};

export default LoginPageComponent;