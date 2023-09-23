import { baseApi } from '@/shared/api'

import { Film } from '../model/index'

const filmApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilm: build.query<Film, number>({
      query: (filmId) => ({
        url: `/${filmId}`,
      }),
      keepUnusedDataFor: 1,
      extraOptions: {
        maxRetries: 3,
      },
    }),
  }),
})
export const { useGetFilmQuery } = filmApi
