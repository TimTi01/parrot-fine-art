import React, { FC, useState } from 'react'
import '../styles/main.scss'
import { Card } from './Card'
import { Category } from './Category'
import { FilterTag } from './FilterTag'
import { Name } from './Name'
import { Pagination } from './Pagination'
import { Search } from './Search'
import { useSearchPicturesQuery } from '../api'

const fakeSearchData = [
    {id: 0, text: 'Mixed Media'},
    {id: 1, text: 'Abstract Expressionism'}
]

export const Main:FC = () => {
    const [searchName, setSearchName] = useState('')
    const [searchCategory, setSearchCategory] = useState('')
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const {data} = useSearchPicturesQuery({searchName, searchCategory, page, limit})


    const clearFilters = () => {
        setSearchName('')
        setSearchCategory('')
    }
    
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
                            onClick={clearFilters}
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
                    {data?.map((item) => (
                        <Card key={item.id}
                              picture={item.picture}
                              avatar={item.avatar}
                              title={item.title}
                              name={item.name}
                        />
                    ))}
                </div>
                <Pagination page={page} setPage={setPage}/>
            </section>
        </div>
    </main>
  )
}
