import { Story, Meta } from '@storybook/react';
import { TextArea } from './index';

export default {
  component: TextArea,
  title: 'TextArea',
} as Meta;

const Template: Story = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
