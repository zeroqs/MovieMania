import { baseApi } from '@/shared/api'

import { Person } from '../model/index'

const personApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPerson: build.query<Person, string>({
      query: (personId) => ({
        url: `v1/person/${personId}`,
      }),
      extraOptions: {
        maxRetries: 3,
      },
    }),
  }),
})
export const { useGetPersonQuery } = personApi
