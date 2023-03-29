import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
// import { within, userEvent } from '@storybook/testing-library'; 
import { Homepage } from './Homepage';

export default { 
  title: 'Components/Homepage', 
  component: Homepage, 
} as ComponentMeta<typeof Homepage>; 

const Template: ComponentStory<typeof Homepage> = (args) => <Homepage {...args}/>; 

export const Landing = Template.bind({})