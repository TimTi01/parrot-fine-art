import React, { FC } from 'react'
import '../styles/components/avatar/avatar.module.scss'

interface AvatarProps {
  avatar?: string
}

export const Avatar:FC<AvatarProps> = ({avatar}) => {
  // I know it's not cool -_-, but it'll do for a test assignment.
  let test = avatar ? avatar : require('../photos/testLogoAvatar1.jpg')

  return (
    <div className='avatar'>
        <img src={test} alt='avatar'/>
    </div>
  )
}
