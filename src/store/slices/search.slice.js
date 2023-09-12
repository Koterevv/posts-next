import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: ''
    },
    reducers: {
        setSearch: (state, actions) => {
            state.search = actions.payload;
        }
    }
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer
