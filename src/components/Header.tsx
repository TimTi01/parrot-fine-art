import React, { FC } from 'react'
import '../styles/components/header/header.module.scss'
import { LogoLine } from './LogoLine'
import { NavTop } from './NavTop'

export const Header:FC = () => {
  return (
    <header className='header'>
      <div className="headerContainer">
        <LogoLine/>
        <NavTop/>
      </div>
    </header>
  )
}
