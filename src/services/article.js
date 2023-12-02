// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY


// Define a service using a base URL and expected endpoints
export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
        // If we have a token set in state, let's assume that we should be passing it.
        headers.set('X-RapidAPI-Key', rapidApiKey)
        headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
        return headers
        },  
    }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => 
      `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
})

// Export hooks for usage in function compo nents, which are
// auto-generated based on the defined endpoints

export const { useLazyGetSummaryQuery } = articleApi;

