import { Story, Meta } from '@storybook/react';
import { IconButton } from './index';

export default {
  component: IconButton,
  title: 'IconButton',
} as Meta;

const Template: Story = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
