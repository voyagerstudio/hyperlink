import React from 'react';

import { UtilButton } from './UtilButton.js';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Utilities/Button',
  component: UtilButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UtilButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary',
  style: 'primary'
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  label: 'Secondary',
  style: 'secondary'
};