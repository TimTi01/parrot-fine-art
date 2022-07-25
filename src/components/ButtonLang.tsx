import React, { FC } from 'react'
import { ArrowB } from './ArrowB'
import '../styles/buttonLang.scss'

export const ButtonLang:FC = () => {
  return (
    <div className='buttonLang'>
        <button className='button' onClick={() => console.log('click')}>ENG</button>
        <ArrowB/>
    </div>
  )
}
