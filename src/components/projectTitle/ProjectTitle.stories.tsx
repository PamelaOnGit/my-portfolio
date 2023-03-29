import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'; 

import { ProjectTitle } from './ProjectTitle'

export default { 
  title: 'Components/Atomic/ProjectTitle', 
  component: ProjectTitle, 
} as ComponentMeta<typeof ProjectTitle>; 

const Template: ComponentStory<typeof ProjectTitle> = (args) => <ProjectTitle {...args}/>;

export const Primary = Template.bind({}); 
Primary.args = { 
  text: 'Project Title'
}; 