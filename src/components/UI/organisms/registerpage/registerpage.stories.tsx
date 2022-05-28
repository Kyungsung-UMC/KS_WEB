 import React, { useEffect, useState, useRef } from 'react';
 import { Meta, Story } from '@storybook/react';
 
 import RegisterPage from './registerpage';
 
 export default {
 title: 'organisms/registerpage',
 component: RegisterPage,
 parameters: {},
 } as Meta;
 
 const Template: Story<any> = (args) => (
 <RegisterPage {...args}  />
 );
 
 export const Default = Template.bind({});
 Default.parameters = {};
 Default.args = {
 };