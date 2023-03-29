import React, { useEffect } from 'react';
import './title.css'

interface TitleProps {
  primary?: boolean;
  size?: 'small' | 'large';
}




export const Title = ({
  primary = false,
  size = 'large',
  ...props
}: TitleProps) => {

  const [counter, setCounter] = React.useState<number>(0)
  const [isActive, setIsActive] = React.useState<boolean>(true)
  const [text, setText] = React.useState<string>('')

  const characters = ("Pam Smith - Junior Developer.").split('')
  console.log(characters)
  console.log(text)

  React.useEffect(() => {
    let interval: any | null = null

    if (counter < characters.length && isActive) { 
      interval = setInterval(() => { 
        setCounter(counter+1)
        setText(text + characters[counter])
        }, 200)
    }
    else if (counter > 10) { 
      clearInterval(interval)
      setIsActive(false)
    }
    return () => clearInterval(interval)
  },[counter, isActive])

  return (
    <div>
      <h1
        className='title-text'
      >
  
      <div>{text}<span className={isActive ? "blink" : "no-blink" }>_</span></div>
      {/* <div><span className={isActive ? "no-blink" : "blink" }>_</span></div> */}
      </h1>

    </div>
  );
};