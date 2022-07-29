import React, { FC } from 'react'
import '../styles/pagination.scss'
import { useGetTotalCountQuery } from '../api'
import { createPages } from '../utils/createPages'
import { Arrow } from './Arrow'

interface PaginationProps {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination:FC<PaginationProps> = ({page, setPage}) => {
    const {data: totalData} = useGetTotalCountQuery('')
    console.log(totalData);

    return (
        <div className='pagination'>
            <div className='paginationSwitch'>
                <button className='SwitchPrevBttn'
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                >
                    <Arrow position={'L'}
                           color={'#000000'} 
                    />
                </button>
                <ul className='SwitchPageNumber'>
                    {totalData?.total === undefined 
                        ? <li className='pageNumberItem'>...</li>
                        : createPages(Math.ceil(totalData?.total / 4)).map((data: number, idx) => (
                            <li key={idx} 
                                className={page !== data ? 'pageNumberItem' : 'pageNumberItem pageNumberItem--active'}
                                onClick={() => setPage(data)}
                            >
                                {data}
                            </li>        
                        ))
                    }
                </ul>
                <button className='SwitchNextBttn'
                        onClick={() => setPage(page + 1)}       
                        disabled={Math.ceil(totalData?.total / 4) === page}             
                >
                    <Arrow position={'R'}
                           color={'#000000'} 
                    />
                </button>
            </div>
            <div className='paginationResults'>
                <span className='ResultsConters'>{`1-4 of ${totalData?.total} Results`}</span>
            </div>
        </div>
    )
}
