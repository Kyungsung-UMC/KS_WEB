import React, { useEffect, useState, useRef } from 'react';
import RegisterPageComponent from './registerpage';
import {RegisterPageType} from './registerpageType'

const RegisterPage: React.FC<RegisterPageType> = (props, {}: RegisterPageType) => (
<RegisterPageComponent {...props} />
);

export default RegisterPage;