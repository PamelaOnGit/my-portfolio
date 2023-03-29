import React from 'react'; 
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProjectDescription } from './ProjectDescription'

export default { 
  title: 'Components/Atomic/ProjectDescription', 
  component: ProjectDescription, 
} as ComponentMeta<typeof ProjectDescription>; 

const Template: ComponentStory<typeof ProjectDescription> = (args) => <ProjectDescription  {...args}/>

export const Primary = Template.bind({})
Primary.args = { 
  text: 'a description of the project should be a couple of sentences long, and describe the purpose of the project and the reason for its development. '
}