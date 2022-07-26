import React, { FC } from 'react'
import { ArrowL } from './ArrowL'
import { ArrowR } from './ArrowR'
import '../styles/pagination.scss'

export const Pagination:FC = () => {

    //TODO: доделать логику и цвет активации кнопки номера выбранной страницы
    return (
        <div className='pagination'>
            <div className='paginationSwitch'>
                <button className='SwitchPrevBttn'>
                    <ArrowL/>
                </button>
                <ul className='SwitchPageNumber'>
                    <li className='pageNumberItem'>1</li>
                    <li className='pageNumberItem'>2</li>
                    <li className='pageNumberItem'>3</li>
                    <li className='pageNumberItem'>...</li>
                    <li className='pageNumberItem'>74</li>
                </ul>
                <button className='SwitchNextBttn'>
                    <ArrowR/>
                </button>
            </div>
            <div className='paginationResults'>
                <span className='ResultsConters'>1-4 of 296 Results</span>
            </div>
        </div>
    )
}
