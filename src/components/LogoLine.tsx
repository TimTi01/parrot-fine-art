import React, { FC } from 'react'
import '../styles/logoLine.scss'
import { Avatar } from './Avatar'
import { ButtonLang } from './ButtonLang'
import { ChatIcon } from './icons/ChatIcon'
import { HomeIcon } from './icons/HomeIcon'
import { SettingsIcon } from './icons/SettingsIcon'
import { LogoLineLogo } from './LogoLineLogo'

export const LogoLine:FC = () => {
  return (
    <div className='logoLine'>
        <LogoLineLogo/>
        <div className='logoLineWrap'>
            <div className='WrapSettingsContainer'>
                <HomeIcon/>
                <ChatIcon/>
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
