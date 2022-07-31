import React, { FC } from 'react'
import { DeleteIcon } from './icons/DeleteIcon'

export const DeleteCardButton:FC = () => {
  return (
    <button className='deleteCardButton'
            onClick={() => console.log('Del!')}
    >
        <DeleteIcon/>
    </button>
  )
}
