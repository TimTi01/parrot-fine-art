import React, { FC } from 'react'
import { Avatar } from './Avatar'
import '../styles/card.scss'

export interface CardProps {
    id?: number,
    key?: number,
    avatar: string,
    author: string,
    title: string,
    picture: string
}

export const Card:FC<CardProps> = ({avatar, author, title, picture}) => {
  return (
    <article className='card'>
        <div className='cardImg'>
            <img src={picture} alt='forestSilence'/>
        </div>
        <div className='cardAutorContainer'>
            <Avatar avatar={avatar}/>
            <div className='ContainerAutorInfoWrap'>
                <div className='AutorInfoWrapName'>
                    {author}
                </div>
                <div className='AutorInfoWrapPictureName'>
                    {title}
                </div>
            </div>
        </div>
    </article>
  )
}