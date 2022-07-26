import React, { FC } from 'react'
import '../styles/avatar.scss'

export const Avatar:FC = () => {
  return (
    <div className='avatar'>
        {/* src don't work :/ */}
        <img src={require('../photos/testLogoAvatar1.jpg')} alt='avatar'/>
    </div>
  )
}
