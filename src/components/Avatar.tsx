import React, { FC } from 'react'
import '../styles/avatar.scss'

interface AvatarProps {
  avatar?: string
}

// require('../photos/testLogoAvatar1.jpg')

export const Avatar:FC<AvatarProps> = ({avatar}) => {
  return (
    <div className='avatar'>
        {/* src don't work :/ */}
        <img src={avatar} alt='avatar'/>
    </div>
  )
}
