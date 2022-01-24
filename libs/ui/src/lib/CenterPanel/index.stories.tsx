import { Story, Meta } from '@storybook/react';
import { CenterPanel } from './index';

export default {
  component: CenterPanel,
  title: 'CenterPanel',
} as Meta;

const Template: Story = (args) => <CenterPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
