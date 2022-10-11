import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Episode } from './types';

// Define a service using a base URL and expected endpoints
export const tvmazeApi = createApi({
  reducerPath: 'tvmazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  endpoints: (builder) => ({
    getEpisodeById: builder.query<Episode, string>({
      query: (id) => `episodes/${id}`,
    }),
  }),
});

export const { useGetEpisodeByIdQuery } = tvmazeApi;
