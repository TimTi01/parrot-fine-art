import React, { FC, useState } from 'react'
import '../styles/components/logoLine/logoLine.module.scss'
import { Avatar } from './Avatar'
import { ButtonLang } from './ButtonLang'
import { ChatIcon } from './icons/ChatIcon'
import { ChatIconActive } from './icons/ChatIconActive'
import { HomeIcon } from './icons/HomeIcon'
import { SettingsIcon } from './icons/SettingsIcon'
import { LogoBlack } from './LogoBlack'

export const LogoLine:FC = () => {
  const [active, setActive] = useState(true)

  return (
    // Top component inside the header
    <div className='logoLine'>
        {/* Logo svg */}
        <LogoBlack/>
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
