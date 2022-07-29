import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardProps } from './components/Card'

interface Response {
    searchName: string,
    searchCategory: string,
    limit: number,
    page: number,
}

// interface ResponseTotalCount {
//     total: number,
// }

export const picturesApi = createApi({
    reducerPath: 'pictures',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints: builder => ({
        searchPictures: builder.query<CardProps[], Response>({
            query: ({searchName, searchCategory, limit, page}) => ({
                url: '/pictures',
                params: {
                    name_like: searchName,
                    category_like: searchCategory,
                    _page: page,
                    _limit: limit,
                }
            }),
        }),
        getTotalCount: builder.query({
            query: () => ({
                url: `/totalCount`
            }),
        })
    })
})

export const {useSearchPicturesQuery, useGetTotalCountQuery} = picturesApi