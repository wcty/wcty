import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "components/IconButton";
import {} from "assets/icons/send.svg"
export default {
    title: 'Buttons/IconButton',
    component: IconButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof IconButton>;

  const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  
};