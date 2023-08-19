import { baseApi } from '@/shared/api'

import { Film } from '../model/index'

const filmApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilm: build.query<Film, number>({
      query: (filmId) => ({
        url: `/${filmId}`,
      }),
      extraOptions: {
        maxRetries: 5,
      },
    }),
  }),
})
export const { useGetFilmQuery } = filmApi
