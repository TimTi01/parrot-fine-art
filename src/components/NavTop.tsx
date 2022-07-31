import React, { FC } from 'react'
import '../styles/components/navTop/navTop.module.scss'
import { Arrow } from './Arrow'

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
                <Arrow position='L'/>
                {mockData.map((item: MenuItem) => (
                    <li key={item.id} 
                        className='menuItem'
                    >
                        {item.title}
                    </li>
                ))}
                <Arrow position='R'/>
            </ul>
        </nav>
    )
}
