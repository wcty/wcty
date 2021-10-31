import { ComponentMeta, ComponentStory } from "@storybook/react";
import SectionTab from "components/SectionTab";




export default {
    title: 'Other/SectionTab',
    component: SectionTab,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof SectionTab>;

  const Template: ComponentStory<typeof SectionTab> = (args) => <SectionTab {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
    Primary.args = {
        label: 'збір коштів'
    };

