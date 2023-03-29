import React, { useEffect } from 'react'; 
import './button.css'

interface ButtonProps { 
  primary?: boolean; 
  backgroundColor?: string; 
  size?: 'small' | 'large'; 
  label: string; 
  onClick: () => void; 
}


export const Button = ({ 
  primary = false, 
  size = 'large', 
  backgroundColor, 
  label, 
  ...props
}: ButtonProps) => { 
  // const mode = primary ? 'button--large' : 'button--small'
  
  return (
    <button
    type="button"
    className="button"
    style={{ backgroundColor  }}
    {...props}
    >
      {label}
    </button>
  );
}; 