import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQueryWithHeader = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('X-API-KEY', import.meta.env.VITE_API_SECRET_KEY)

    return headers
  },
})

export const baseApi = createApi({
  baseQuery: baseQueryWithHeader,
  endpoints: () => ({}),
})
