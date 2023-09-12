import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
    'posts/getAllPosts',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            console.log(response);
            if (!response.ok) throw new Error('Server Error!')

            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const removePost = createAsyncThunk(
    'posts/removePost',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
                // headers: {
                //     'content-type': 'application/json'
                // }
            })

            if (!response.ok) throw new Error('Can\'t delete post. Server error!')

            dispatch(removePostById(id))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {
        removePostById: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        },
    },



    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },

    }
})

export const { removePostById } = postsSlice.actions

export default postsSlice.reducer
