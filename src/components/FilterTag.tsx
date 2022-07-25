import React, { FC } from 'react'
import { Cross } from './icons/Cross'
import '../styles/filterTag.scss'

interface FilterTagProps {
    text: string
}

export const FilterTag:FC<FilterTagProps> = (text) => {
  return (
    <div className='filterTag'>
        <Cross/>
        <span className='filterTagText'>{text.text}</span>
    </div>
  )
}
