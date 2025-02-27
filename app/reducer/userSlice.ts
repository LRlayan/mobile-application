import {UserModel} from "../model/user-model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {refreshToken, saveToken} from "../api/tokenService";

const api = axios.create({
    baseURL: "http://192.168.8.135:3000/api/v1"
});

const initialState: { user: UserModel | null, jwt_token: null, refresh_token: null, username: null, isAuthenticated: boolean, loading: false, error: string } = {
    user: null,
    jwt_token: null,
    refresh_token: null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: ""
}

export type UserRootState = {
    user: {
        user: UserModel | null;
        jwt_token: null;
        refresh_token: null;
        username: null;
        isAuthenticated: boolean;
        loading: boolean;
        error: string;
    };
};

export const register = createAsyncThunk(
    'auth/register',
    async (user: UserModel) => {
        try {
            const response = await api.post('auth/register', user, {withCredentials: true});
            return response.data;
        } catch (e) {
            throw e;
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (user: UserModel) => {
        try {
            const response = await api.post('auth/login', user, { withCredentials: true });
            return response.data;
        } catch (e) {
            throw e;
        }
    }
);

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                if (action.payload) {
                    state.user = action.payload;
                    state.isAuthenticated = true;
                }
            })
            .addCase(register.pending, () => {
                console.log("Pending register user");
            })
            .addCase(register.rejected, () => {
                console.log("Rejected register user");
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload) {
                    state.user = action.payload.user;
                    state.jwt_token = action.payload.accessToken;
                    state.refresh_token = action.payload.refreshToken;
                    console.log("token ::: ", action.payload.accessToken);
                    saveToken(action.payload.accessToken);
                    refreshToken(action.payload.refreshToken)
                    state.username = action.payload.username;
                    state.isAuthenticated = true;
                }
            })
            .addCase(login.rejected, (state) => {
                state.isAuthenticated = false;
                console.error("Login failed");
            });
    }
});

export default UserSlice.reducer;