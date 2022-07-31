import React, { FC } from 'react'
import { Avatar } from './Avatar'
import '../styles/components/card/card.module.scss'
import { DeleteCardButton } from './DeleteCardButton'

export interface CardProps {
    id?: number,
    key?: number,
    avatar: string,
    name: string,
    title: string,
    picture: string
}

// The component containing the picture, 
// the author of the picture 
// and the name of the picture
export const Card:FC<CardProps> = ({avatar, name, title, picture}) => {
  return (
    <article className='card'>
        <div className='cardImg'>
            <img src={picture} alt='forestSilence'/>
        </div>
        <div className='cardAutorContainer'>
            <Avatar avatar={avatar}/>
            <div className='ContainerAutorInfoWrap'>
                <div className='AutorInfoWrapName'>
                    {name}
                </div>
                <div className='AutorInfoWrapPictureName'>
                    {title}
                </div>
            </div>
            <DeleteCardButton/>
        </div>
    </article>
  )
}