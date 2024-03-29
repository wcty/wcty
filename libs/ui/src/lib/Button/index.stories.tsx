import { Story, Meta } from '@storybook/react';
import { Button } from './index';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
