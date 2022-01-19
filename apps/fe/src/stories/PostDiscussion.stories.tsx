import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostDiscussion from "containers/Initiative/PostDiscussion";





export default {
    title: 'Post/Discussion',
    component: PostDiscussion,
  
  } as ComponentMeta<typeof PostDiscussion>;

  const Template: ComponentStory<typeof PostDiscussion> = (args) => <PostDiscussion {...args} />;

  export const Primary = Template.bind({});

    Primary.args = {
       
        
    };

