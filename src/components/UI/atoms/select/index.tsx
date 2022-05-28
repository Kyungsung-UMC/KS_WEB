import React, { useEffect, useState, useRef } from 'react';
import SelectComponent from './select';

import {SelectType} from './selectType'


const Select: React.FC<SelectType> = (props, {size = 'small'}: SelectType) => (
  <SelectComponent {...props} size = {size} />
);

export default Select;
