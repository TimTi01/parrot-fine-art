import React, { FC } from 'react'
import '../styles/components/buttonLang/buttonLang.module.scss'
import { Arrow } from './Arrow'

export const ButtonLang:FC = () => {
  return (
    <div className='buttonLang'>
        <button className='button' onClick={() => console.log('click')}>ENG</button>
        <Arrow position='B'/>
    </div>
  )
}
