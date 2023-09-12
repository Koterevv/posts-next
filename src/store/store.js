import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";
import searchSlice from "./slices/search.slice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        search: searchSlice,
    }
})
