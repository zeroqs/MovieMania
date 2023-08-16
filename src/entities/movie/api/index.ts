import { baseApi } from '@/shared/api'

import { FilmSliderResponse } from '../model/index'

function getRandomInt(max: number) {
  return Math.random() * (max - 1) + 1
}

const filmSliderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFilmsForSlide: build.query<FilmSliderResponse, string>({
      query: () => ({
        url: `?selectFields=backdrop&selectFields=id&page=${getRandomInt(
          15,
        )}&limit=10&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=rating.imdb&selectFields=genres.name`,
        providesTags: ['SliderFilm'],
      }),
      extraOptions: {
        maxRetries: 5,
      },
    }),
  }),
})
export const { useGetFilmsForSlideQuery } = filmSliderApi
