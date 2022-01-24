import { Story, Meta } from '@storybook/react';
import { Avatar } from './index';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
