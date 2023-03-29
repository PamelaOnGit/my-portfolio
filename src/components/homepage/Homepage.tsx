import React from 'react';
import { Title } from '../title/Title';
import { Button } from '../button/Button'

import './homepage.css'

export const Homepage: React.VFC = () => {

  const [buttonClass1, setButtonClass1] = React.useState<string>('hide-button')
  const [buttonClass2, setButtonClass2] = React.useState<string>('hide-button')
  const [buttonClass3, setButtonClass3] = React.useState<string>('hide-button')

  React.useEffect(() => {
    setTimeout(() => {
      setButtonClass1('display-button')
    }, 7000)
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setButtonClass2('display-button')
    }, 7300)
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setButtonClass3('display-button')
    }, 7600)
  }, [])


  function handleClick() {
    console.log('You pressed a button!')
  }

  return (
    <div className='homepage-container'>
      <Title />

      <div className='button-container'></div>
      <div className={buttonClass1}>
        <Button
          label={"my work"}
          onClick={handleClick}
        />
      </div>
      <div className={buttonClass2}>
        <Button
          label={"experience"}
          onClick={handleClick}
        />
      </div>
      <div className={buttonClass3}>
        <Button
          label={"more"}
          onClick={handleClick}
        />
      </div>


    </div>
  )
}