import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chat from "containers/Chat";





export default {
    title: 'Initiative/Chat',
    component: Chat,
  
  } as ComponentMeta<typeof Chat>;

  const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

  export const Primary = Template.bind({});

    Primary.args = {
       
        
    };

