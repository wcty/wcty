import { ComponentMeta, ComponentStory } from "@storybook/react";
import CreatePost from "containers/Initiative/Feed/Post/CreatePost/CreatePost";

export default {
    title: 'Feed/CreatePost',
    component: CreatePost,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof CreatePost>;

  const Template: ComponentStory<typeof CreatePost> = (args) => <CreatePost {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  
};
