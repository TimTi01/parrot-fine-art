import React, { FC } from 'react'
import '../styles/header.scss'
import '../styles/container.scss'
import { LogoLine } from './LogoLine'
import { NavTop } from './NavTop'

export const Header:FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <LogoLine/>
        <NavTop/>
      </div>
    </header>
  )
}
