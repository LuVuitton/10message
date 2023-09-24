import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:7777'; // Замените на ваш базовый URL

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => '/users', // Путь к вашему эндпоинту
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;

