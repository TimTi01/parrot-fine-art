import React, { FC } from 'react'
import { Avatar } from './Avatar'
import '../styles/card.scss'

export const Card:FC = () => {
  return (
    <article className='card'>
        <div className='cardImg'>
            <img src={require('../photos/forestSilence.jpg')} alt='forestSilence'/>
        </div>
        <div className='cardAutorContainer'>
            <Avatar/>
            <div className='ContainerAutorInfoWrap'>
                <div className='AutorInfoWrapName'>
                    George Dillan
                </div>
                <div className='AutorInfoWrapPictureName'>
                    Forest silence
                </div>
            </div>
        </div>
    </article>
  )
}