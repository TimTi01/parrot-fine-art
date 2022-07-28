import React, { FC, useState } from 'react'
import '../styles/main.scss'
import { Card } from './Card'
import { Category } from './Category'
import { FilterTag } from './FilterTag'
import { Name } from './Name'
import { Pagination } from './Pagination'
import { Search } from './Search'
import pictures from '../data.json'
import { useSearchPicturesQuery } from '../api'

const fakeSearchData = [
    {id: 0, text: 'Mixed Media'},
    {id: 1, text: 'Abstract Expressionism'}
]

export const Main:FC = () => {
    const [searchName, setSearchName] = useState('')
    const [searchCategory, setSearchCategory] = useState('Landscape')
    const {data} = useSearchPicturesQuery({searchName, searchCategory})

    console.log(data);
    
  return (
    <main className='main'>
        <div className='container'>
            <section className='headerSection'>
                <div className='headerSectionHeaderWrap'>
                    {/* TODO: Возможно эти два компонента можно переделать */}
                    <h1 className='headerWrapTitle'>Artworks</h1>
                    <span className='headerWrapCount'>588</span>
                </div>
                <div className='headerSectionSearchWrap'>
                    <div className='searchWrapContainer'>
                        <Search/>
                        <div className='SearchWrapTagsСontainer'>
                            {fakeSearchData.map((text) => (
                                <FilterTag key={text.id} text={text.text}/>
                            ))}
                        </div>
                    </div>
                                
                    <button className='SearchWrapClear'
                            onClick={() => console.log('click')}
                    >
                        Clear filters
                    </button>
                </div>
            </section>
            <section className='contentSection'>
                <div className='contentSectionFilterWrap'>
                    <Category
                        searchCategory={searchCategory}
                        setSearchCategory={setSearchCategory}
                    />
                    <Name 
                        searchName={searchName}
                        setSearchName={setSearchName}    
                    />
                </div>
                <div className='contentSectionCardWrap'>
                    {/* Исправить багулину с category и т.п*/}
                    {data?.map((item) => (
                        <Card key={item.id}
                              picture={item.picture}
                              avatar={item.avatar}
                              title={item.title}
                              author={item.author}
                        />
                    ))}
                </div>
                <Pagination/>
            </section>
        </div>
    </main>
  )
}
