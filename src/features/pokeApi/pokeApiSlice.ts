import { apiSlice } from "../../app/api/apiSlice";


export const pokeApi = apiSlice.enhanceEndpoints({ addTagTypes: ["Pokemon"] }).injectEndpoints({
    endpoints: (builder) => ({
        fetchPokemons: builder.query({
            query: () => `/pokemon`,
            providesTags: ["Pokemon"],
        }),
        fetchPokemonByName: builder.query({
            query: (name: string) => `/pokemon/${name}`,
            providesTags: ["Pokemon"],
        }),
        fetchPokemonById: builder.query({
            query: (id: string) => `/pokemon/${id}`,
            providesTags: ["Pokemon"],
        })
    })
})

export const { useFetchPokemonsQuery, useFetchPokemonByNameQuery, useFetchPokemonByIdQuery } = pokeApi