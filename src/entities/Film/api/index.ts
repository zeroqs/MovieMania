import { baseApi } from '@/shared/api'

import { Film } from '../model/index'

const filmApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilm: build.query<Film, number>({
      query: (filmId) => ({
        url: `v1.3/movie/${filmId}`,
      }),
      keepUnusedDataFor: 60,
      extraOptions: {
        maxRetries: 3,
      },
    }),
    getFilmByGenre: build.query<Film[], string>({
      query: (genre) => ({
        url: `v1.3/movie?year=2020-2023&genres.name=${genre}&poster.previewUrl=!null&name=!null&limit=15`,
      }),
      transformResponse: (response: {
        docs: Film[]
        limit: number
        pages: number
        total: number
      }) => {
        return response.docs.map((item) => item)
      },
    }),
    getFilms: build.query<
      Film[],
      { genre?: string; sort?: string; pagination: number }
    >({
      query: (args) => ({
        url: `https://api.kinopoisk.dev/v1.3/movie?year=0-2021${
          args.genre ? `&genres.name=${args.genre}` : ''
        }&rating.imdb=1-10&poster.previewUrl=!null&sortField[]=${
          args.sort
        }&sortType[]=-1&sortType[]=-1&limit=${args.pagination}`,
      }),
      transformResponse: (response: {
        docs: Film[]
        limit: number
        pages: number
        total: number
      }) => {
        return response.docs.map((item) => item)
      },
    }),
  }),
})

export const { useGetFilmQuery, useGetFilmByGenreQuery, useGetFilmsQuery } =
  filmApi
