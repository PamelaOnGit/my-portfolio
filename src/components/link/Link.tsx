import React from 'react'
import './link.css'

interface LinkProps { 
  link: string,
  label: string,
}

export const Link = ({
  link, 
  label
}: LinkProps) => { 
  return (
    <a href={link}>{label}</a>
  );
}; 