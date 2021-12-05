import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import {IButtonProps} from 'components/Button/styles'


export default {
    title: 'Inputs/Button',
    component: Button,
   
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Styled Button</Button> ;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  customType: 'secondary',
  size: 'large'
};



