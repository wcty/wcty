import { ComponentMeta, ComponentStory } from "@storybook/react";
import Comment from 'components/Post/Comment'




export default {
    title: 'Post/Comment',
    component: Comment,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta<typeof Comment>;

  const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

  export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
    Primary.args = {
        author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
        message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
        likesCount: 4,
        date: new Date(),

        comments: [
            {
                author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
                message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
                likesCount: 4,
                date: new Date()
            },
            {
                author: {name: "Ольга Мельник", date : new Date(),  roles: ['iніціатор', 'волонтер', 'інвестор'] },
                message: 'Добрий день! Рада вашій пропозиції. Можливо у вас будуть якійсь креслення, преглянути?',
                likesCount: 4,
                date: new Date()
            }
        ]
        
    };

