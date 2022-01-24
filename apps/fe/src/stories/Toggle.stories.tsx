import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toggle } from "@ui";

export default {
    title: 'Other/Toggle',
    component: Toggle,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof Toggle>;

  const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
    Primary.args = {
       
    };
