import React, { FC, useState } from 'react'
import '../styles/logoLine.scss'
import { Avatar } from './Avatar'
import { ButtonLang } from './ButtonLang'
import { ChatIcon } from './icons/ChatIcon'
import { ChatIconActive } from './icons/ChatIconActive'
import { HomeIcon } from './icons/HomeIcon'
import { SettingsIcon } from './icons/SettingsIcon'
import { LogoLineLogo } from './LogoLineLogo'

export const LogoLine:FC = () => {
  const [active, setActive] = useState(true)

  return (
    <div className='logoLine'>
        <LogoLineLogo/>
        <div className='logoLineWrap'>
            <div className='WrapSettingsContainer'>
                <HomeIcon/>
                  {active ? <ChatIconActive/> : <ChatIcon/>}
                <SettingsIcon/>
            </div>
            <div className='WrapАccountContainer'>
                <Avatar/>
                <ButtonLang/>
            </div>
        </div>
    </div>
  )
}
