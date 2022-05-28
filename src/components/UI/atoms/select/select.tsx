import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
// import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
// import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledSelect from './selectStyle';

const SelectComponent: React.FC<any> = (props,size) => {
  return (
    <StyledSelect {...props} >
    <option value={"none"} hidden style={{}}>
          {props.placeholder}
        </option>
        {props.item.map((item: string) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
    </StyledSelect>
     
  );
};

export default SelectComponent;
