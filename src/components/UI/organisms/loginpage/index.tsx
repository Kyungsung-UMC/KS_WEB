import React, { useEffect, useState, useRef } from 'react';
import LoginPageComponent from './loginpage';
import {LoginPageType} from './loginpageType'

const Button: React.FC<LoginPageType> = (props, {}: LoginPageType) => (
<LoginPageComponent {...props} />
);

export default Button;