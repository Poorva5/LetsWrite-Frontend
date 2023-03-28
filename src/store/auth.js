import axios from "axios";

const apiWithoutToken = axios.create({
    // baseURL: "http://15.207.8.22:8005",
    baseURL: "http://127.0.0.1:8000/",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
    },
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
});

const apiWithToken = axios.create({
    // baseURL: "http://15.207.8.22:8005",
    baseURL: "http://127.0.0.1:8000/",
    timeout: 15000,
    headers: {
        "Content-Type": "Application/json",
        "Authorization": `Token ${localStorage.getItem('accessToken')}`
    }
});

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({

    name: 'auth',
    initialState: {
        loading: false,
        user: {},
        accessToken: '',
        isAuthorised: false,
        myDetails: {},
    },

    reducers: {
        // reducers are function that are used to update the state
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading
        },
        login: (state, action) => {
            console.log('payload', action.payload)
            localStorage.setItem('accessToken', action.payload.key)
            state.accessToken = action.payload.key;
        },
        setAuthorized: (state, action) => {
            state.isAuthorised = action.payload
        },
        fetchMyDetails: (state, action) => {
            state.myDetails = action.payload;
        }
    }

})
export const { setUser, setLoading, login, setAuthorized, fetchMyDetails } = authSlice.actions;

export default authSlice.reducer;

export function LoginUser(data) {
    return async function LoginThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.post(
                "/dj-rest-auth/login/",
                data
            );
            console.log(res.data)
            dispatch(login(res.data))
            dispatch(setAuthorized(true));
            dispatch(setLoading());
            window.location.href = '/'
        } catch (err) {
            dispatch(setLoading());
            dispatch(setAuthorized(false))
        }
    };
}

export function SignUpUser(data) {
    return async function SignUpThunk(
        dispatch,
        getState
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithoutToken.post(
                "/dj-rest-auth/registration/",
                data
            );
            dispatch(login(res.data))
            dispatch(setAuthorized(true));
            dispatch(setLoading());
            window.location.href = '/'
        } catch (err) {
            dispatch(setLoading());
            dispatch(setAuthorized(false))
        }
    };
}

export function fetchUserDetail(id) {
    return async function fetchUserDetailThunk(
        dispatch
    ) {
        dispatch(setLoading());
        try {
            const res = await apiWithToken.get(
                `/api/user/${id}/profile/`
            );
            console.log(res.data)
            dispatch(fetchMyDetails(res.data))
            dispatch(setLoading());
        } catch (err) {
            dispatch(setLoading())
        }
    };
}