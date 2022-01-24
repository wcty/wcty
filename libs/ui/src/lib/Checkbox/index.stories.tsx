import { Story, Meta } from '@storybook/react';
import { Checkbox } from './index';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
