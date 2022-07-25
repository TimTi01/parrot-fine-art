import React, { FC } from 'react'
import '../styles/navTop.scss'
import { ArrowL } from './ArrowL'
import { ArrowR } from './ArrowR'

interface MenuItem {
    id: number,
    title: string
}

const mockData = [
    {id: 0, title: 'Artworks'}, 
    {id: 2, title:'Landscape'}, 
    {id: 3, title:'Portrait'}, 
    {id: 4, title:'Still life'}, 
    {id: 5, title:'Painting'}, 
    {id: 6, title:'Sculpture'}, 
    {id: 7, title:'Architecture'}, 
    {id: 8, title:'Graphic arts'}
]

export const NavTop:FC = () => {

    return (
        <nav className='navTop'>
            <ul className='navTopMenu'>
                <ArrowL/>
                {mockData.map((item: MenuItem) => (
                    <li key={item.id} 
                        className='menuItem'
                    >
                        {item.title}
                    </li>
                ))}
                <ArrowR/>
            </ul>
        </nav>
    )
}
