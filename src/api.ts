import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardProps } from './components/Card'

interface Response {
    searchName: string,
    searchCategory: string,
}

export const picturesApi = createApi({
    reducerPath: 'pictures',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/pictures'
    }),
    endpoints: builder => ({
        searchPictures: builder.query<CardProps[], Response>({
            query: ({searchName, searchCategory}) => ({
                url: '/',
                params: {
                    name_like: searchName,
                    category_like: searchCategory
                }
            }),
        })
    })
})

export const {useSearchPicturesQuery} = picturesApi