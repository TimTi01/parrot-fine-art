import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardProps } from './components/Card'

interface Response {
    searchName: string,
    searchCategory: string,
    limit: number,
    page: number,
}

export const picturesApi = createApi({
    reducerPath: 'pictures',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005' //3005 server port
    }),
    endpoints: builder => ({
        //Getting all the data(pictures)
        searchPictures: builder.query<CardProps[], Response>({
            query: ({searchName, searchCategory, limit, page}) => ({
                //url string
                url: '/pictures',
                //url query params 
                params: {
                    name_like: searchName,
                    category_like: searchCategory,
                    _page: page,
                    _limit: limit,
                }
            }),
        }),
        // The 'total count' field was missing from the server. I made my 'total count' field)
        getTotalCount: builder.query({
            query: () => ({
                url: `/totalCount`
            }),
        })
    })
})

export const {useSearchPicturesQuery, useGetTotalCountQuery} = picturesApi

//If it is completely unclear ---> https://redux-toolkit.js.org/rtk-query/overview