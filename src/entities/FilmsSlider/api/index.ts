import { baseApi } from '@/shared/api'

import { FilmSliderResponse } from '../model/index'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max - 1) + 1)
}

const filmSliderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmsForSlide: build.query<FilmSliderResponse, string>({
      query: () => ({
        url: 'v1.3/movie?selectFields=backdrop&selectFields=id&limit=10&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=rating.imdb&selectFields=genres.name',
        providesTags: ['SliderFilm'],
        params: { page: getRandomInt(15) },
      }),
      extraOptions: {
        maxRetries: 5,
      },
    }),
  }),
})
export const { useGetFilmsForSlideQuery } = filmSliderApi
