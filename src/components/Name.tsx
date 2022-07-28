import React, { FC, useState } from 'react'

interface NameProps {
    searchName: string
    setSearchName: React.Dispatch<React.SetStateAction<string>>
}

export const Name:FC<NameProps> = ({searchName, setSearchName}) => {
    const [active, setActive] = useState(false)

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('search: ', e.target.value);
        
        setSearchName(e.target.value)
    }

    return (
        <div className='select'>
            <div className='dropdown'>
                <button className='dropdownButton' onClick={() => setActive(!active)}>Name</button>
                <ul className={active ? 'dropdownList' : 'dropdownList--hidden'}>
                    <li className='listItem'>
                        <input className='listItemSearch' 
                               type='text' 
                               placeholder='Start type a name'
                               value={searchName}
                               onChange={(e) => handlerChange(e)}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}