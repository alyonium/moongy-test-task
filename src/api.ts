import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Episode, Show } from './types';

export const tvmazeApi = createApi({
  reducerPath: 'tvmazeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.tvmaze.com/' }),
  endpoints: (builder) => ({
    getEpisodeById: builder.query<Episode, string>({
      query: (id) => {
        const params = new URLSearchParams({ embed: 'show' });
        return `episodes/${id}?${params}`;
      },
    }),
    getShowById: builder.query<Show, string>({
      query: (id) => {
        const params = new URLSearchParams({ embed: 'episodes' });
        return `shows/${id}?${params}`;
      },
    }),
  }),
});

export const { useGetEpisodeByIdQuery, useGetShowByIdQuery } = tvmazeApi;
