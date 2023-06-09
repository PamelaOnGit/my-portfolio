import React from 'react'; 
import { ComponentStory, ComponentMeta } from '@storybook/react'; 
 
import { Link } from './Link'; 

export default { 
  title: 'Components/Atomic/Link', 
  component: Link, 
} as ComponentMeta<typeof Link>; 

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}/>; 

export const Primary = Template.bind({})
Primary.args = { 
  link: 'external site', 
  label: 'label', 
}; 