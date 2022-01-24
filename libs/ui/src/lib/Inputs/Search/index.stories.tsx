import { Story, Meta } from '@storybook/react';
import { Search } from './index';

export default {
  component: Search,
  title: 'Search',
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
