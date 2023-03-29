import React from 'react'; 
import './project-description.css'; 

interface ProjectDescriptionProps { 
  text: string,
}

export const ProjectDescription = ({ 
  text, 
}: ProjectDescriptionProps) => {
  return (
    <p>{text}</p>
  )
}

