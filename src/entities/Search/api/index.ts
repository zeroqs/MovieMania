import { baseApi } from '@/shared/api'

import { SearchResult } from '../model'

const searchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchBy: build.query<SearchResult[], string>({
      query: (query) => ({
        url: `v1.2/movie/search?page=1&limit=10&query=${query}`,
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      transformResponse: (response: {
        docs: SearchResult[]
        limit: number
        pages: number
        total: number
      }) => {
        return response.docs.map((item) => item)
      },
    }),
  }),
})

export const { useSearchByQuery } = searchApi
