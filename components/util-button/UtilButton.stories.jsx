import React from 'react';
import { UtilButton } from './UtilButton.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Utilities/Button',
  component: UtilButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This is our go-to button for Cherrypicked.'
      }
    }
  },
  argTypes: {
    label: {
      name: 'label',
      description: 'This is the text that displays within the button',
      table: {
        type: {
          summary: 'Any valid string',
          detail: 'This should only include valid html. eg. no interactive elements'
        },
        defaultValue: {
          summary: 'No default provided',
          detail: 'You must provide text for this to be a valid element'
        }
      },
      type: {
        required: true
      },
      control: {
        type: 'text'
      }
    },
    style: {
      name: 'style',
      description: 'This defines the visual style of the button',
      table: {
        type: {
          summary: 'Please select one of the valid options',
          detail: 'Options include "Primary" and "secondary"'
        },
        defaultValue: {
          summary: 'Primary'
        }
      },
      type: {
        required: true
      },
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'size',
      description: 'This defines the size of the button',
      table: {
        type: {
          summary: 'Please select one of the valid options',
          detail: 'Options include "Small", "Medium", or "Large"'
        },
        defaultValue: {
          summary: 'Medium'
        }
      },
      type: {
        required: false
      },
      control: {
        type: 'radio'
      }
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UtilButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.parameters = {
  docs: {
    description: {
      story: 'woah'
    }
  }
}
Default.args = {
  label: 'Primary',
  size: 'medium',
  style: 'primary'
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.parameters = {
  docs: {
    description: {
      story: 'This is the primary button style, used to draw attention to a specific call-to-action'
    }
  }
}
Primary.args = {
  label: 'Primary',
  style: 'primary'
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.parameters = {
  docs: {
    description: {
      story: 'This should only be used alongside an existing primary button'
    }
  }
}
Secondary.args = {
  label: 'Secondary',
  style: 'secondary'
};