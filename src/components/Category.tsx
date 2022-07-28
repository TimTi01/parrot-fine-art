import React, { FC, useState } from 'react'
import '../styles/category.scss'

const listItem = ['Sculpture', 'Architecture', 'Landscape', 'Graphic arts', 'Portrait']
// const listItem = ['Sculpture', 'Architecture', 'Landscape', 'Graphic arts', 'Portrait']

interface CategoryProps {
  searchCategory: string
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>
}

export const Category:FC<CategoryProps> = ({searchCategory, setSearchCategory}) => {
  const [active, setActive] = useState(false)
  const [selectedRadioBttn, setSelectedRadioBttn] = useState("Sculpture")
  // console.log(selectedRadioBttn);
  

  const isRadioSelected = (value: string): boolean => {
    return searchCategory === value
  }

  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchCategory(e.currentTarget.value)
  }

  return (
    <div className='select'>
        <div className='dropdown'>
            <button className='dropdownButton' onClick={() => setActive(!active)}>Category</button>
            <ul className={active ? 'dropdownList' : 'dropdownList--hidden'}>

              {listItem.map(item => (
                <li key={item} className='listItem'>
                  <label>
                    <input 
                      className='listItemRealRadio'
                      type='radio'
                      name='dropdownRadio'
                      value={item}
                      checked={isRadioSelected(item)}
                      onChange={handleRadioClick}
                    />
                    <span className="listItemCustomRadio"></span>
                    <span className="listItemText">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}
