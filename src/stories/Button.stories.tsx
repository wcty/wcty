import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import { EButtonSize, EButtonTypes } from 'components/Button/styles';

export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof Button>;

  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type:  EButtonTypes.PRIMARY,
  size: EButtonSize.LARGE,
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: EButtonSize.LARGE,
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: EButtonSize.SMALL,
//   label: 'Button',
// };