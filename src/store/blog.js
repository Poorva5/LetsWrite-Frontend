import axios from "axios";

const apiWithToken = axios.create({
    // baseURL: "http://15.207.8.22:8005",
    baseURL: "http://127.0.0.1:8000/",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    },
    // xsrfCookieName: "csrftoken",
    // xsrfHeaderName: "X-CSRFTOKEN",
});

const apiWithoutToken = axios.create({
    // baseURL: "http://15.207.8.22:8005",
    baseURL: "http://127.0.0.1:8000/",
    timeout: 15000
});


const { createSlice } = require("@reduxjs/toolkit");

const blogSlice = createSlice({

    name: 'blog',
    initialState: {
        post: {},
        postList: [],
        isLoading: false,
        fetchingList: []
    },
    reducers: {
        addBlog: (state, action) => {
            state.push(action.payload)
        },
        setBlogs: (state, action) => {
            state.postList = action.payload
        },
        setBlog: (state, action) => {
            state.post = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const { addBlog, setBlog, setBlogs, setLoading } = blogSlice.actions;

export default blogSlice.reducer;

export function fetchBlogList(data) {
    return async function fetchBlogListThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.get(
                "/api/post/list/",
            );
            console.log(res.dat)
            dispatch(setBlogs(res.data))
            dispatch(setLoading());

        } catch (err) {
            dispatch(setLoading());
        }
    };

}

export function fetchBlog(id) {
    return async function fetchBlogThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.get(
                `/api/post/detail/${id}`,
            );
            console.log(res.data)
            dispatch(setBlog(res.data))
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    };

}

export function createBlog(data) {
    return async function fetchBlogThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithToken.post(
                `/api/post/create/`,
                (data = data)
            );
            console.log(res.data)
            // dispatch(setBlog(res.data))
            window.location.href = `/details/${res.data.id}`
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading());
        }
    };

}
