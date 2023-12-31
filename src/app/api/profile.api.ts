import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:7777/profile-info'; // Замените на ваш базовый URL

export const profileSlice = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProfileInfo: builder.query<ProfileInfoResponse, string>({
      query: (userID) => `/${userID}`, // Путь к вашему эндпоинту
    }),
  }),
});

export const { useGetProfileInfoQuery } = profileSlice;








export type ProfileInfoResponse = {
  userName: string;
  subscribers: number;
  location: "close" | "not far" | "far";
  photos: string[] | null;
  totalPhotos: number;
};