import { Story, Meta } from '@storybook/react';
import { TextField } from './index';

export default {
  component: TextField,
  title: 'TextField',
} as Meta;

const Template: Story = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
