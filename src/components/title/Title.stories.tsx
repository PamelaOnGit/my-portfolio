import React from 'react'; 
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
import { Title } from './Title'

export default { 
  title: 'Components/Atomic/Title', 
  component: Title
} as ComponentMeta<typeof Title>; 

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />; 

export const Primary = Template.bind({})
Primary.args = { 
  primary: true, 
  size: 'large', 
}