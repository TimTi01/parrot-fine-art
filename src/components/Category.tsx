import React, { FC } from 'react'
import '../styles/category.scss'

export const Category:FC = () => {
  return (
    // <div className='category'>
    //     <select>
    //         <option  hidden>Category</option> 
    //         <option>Пункт 1</option>
    //         <option>Пункт 2</option>
    //     </select>
    // </div>
    <div className='select'>
        <div className='dropdown'>
            <button className='dropdownButton' onClick={() => console.log('click')}>Category</button>
            <ul className='dropdownList'>
                <li className='listItem'>
                    
                </li>
                <li className='listItem'>test</li>
                <li className='listItem'>test</li>
                <li className='listItem'>test</li>
            </ul>
        </div>
    </div>
  )
}
