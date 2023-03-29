import React from 'react'
import './project-title.css'

interface ProjectTitleProps {
  text: string; 
}

export const ProjectTitle = ({ 
  text, 
  ...props
}: ProjectTitleProps) => { 
  return (
  <h1 className='project-title'>{text}</h1>
  )
}