import React, { useEffect, useState, useRef } from 'react';
import { Meta, Story } from '@storybook/react';

import LoginPage  from './loginpage';

export default {
    title: 'organisms/LoginPage ',
    component: LoginPage ,
    parameters: {},
} as Meta;

const Template: Story<any> = (args) => (
<LoginPage  {...args}  />
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
};