const { createSlice } = require("@reduxjs/toolkit");

const blogSlice = createSlice({

    name: 'blog',

    initialState: [],

    reducers: {

        addBlog: (state, action) => {
            state.push(action.payload)
        }

        
    }

})

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;