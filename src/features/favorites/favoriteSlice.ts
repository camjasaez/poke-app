import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


type Pokemon = {
    name: String,
}

export interface FavoriteState {
    totalQuantity: number,
    pokemons: Pokemon[]
}

const initialState: FavoriteState = {
    totalQuantity: 0,
    pokemons: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state: FavoriteState, action: PayloadAction<String>) => {

            const index = state.pokemons.findIndex(pokemon =>
                pokemon.name === action.payload)

            if (index === -1) {
                state.totalQuantity++
                state.pokemons.push({ name: action.payload })
            }
        },
        removeFavorite: (state: FavoriteState, action: PayloadAction<String>) => {
            const index = state.pokemons.findIndex(pokemon =>
                pokemon.name === action.payload)

            if (index !== -1) {
                state.totalQuantity--
                state.pokemons.splice(index, 1)
            }
        }
    }
})


export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
export const selectCount = (state: RootState) => state.favorite.totalQuantity
export const selectPokemons = (state: RootState) => state.favorite.pokemons