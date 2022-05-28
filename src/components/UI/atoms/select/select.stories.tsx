import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';
// import StoriesLayout from "StoriesLayout";
import {SelectType} from './selectType';
import SelectComponent from './select';

export default {
  title: 'Atoms/Select',
  component: SelectComponent,
  parameters: {},
  argTypes:{
    // placeholder: args.stirng.isRequired,
  
  }
  
} as Meta;

const Template: Story<SelectType> = (args) => (
 
<SelectComponent
      
      {...args}
      
    />
 
);

export const Search = Template.bind({});
Search.parameters = {};
Search.args = {
  item: ['1', '2'],
  
};




