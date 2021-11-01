import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';


export default {
    title: 'Example/Button',
    component: Button,
   
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  customSize: 'medium',
  customType: 'subtle',
  label: 'Button',
};



