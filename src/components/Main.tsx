import React, { FC } from 'react'
import '../styles/main.scss'
import { FilterTag } from './FilterTag'
import { Search } from './Search'
// import '../styles/container.scss'

const fakeSearchData = [
    {id: 0, text: 'Mixed Media'},
    {id: 1, text: 'Abstract Expressionism'}
]

export const Main:FC = () => {
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
        </div>
    </main>
  )
}
