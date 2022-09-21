import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPokemons, GetPokemonsTypes } from "./Interfaces";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getPockemons: builder.query<GetPokemons, string>({
      query: (payload) => `${payload}`,
    }),
    getPockemonTypes: builder.query<GetPokemonsTypes, string>({
      query: () => `type?limit=999`,
    }),
  }),
});

export const { useGetPockemonTypesQuery, useGetPockemonsQuery } = dataApi;
