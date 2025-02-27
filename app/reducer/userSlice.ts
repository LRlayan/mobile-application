import {UserModel} from "../model/user-model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from "../api/api";

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
                console.error("Pending register user");
            })
            .addCase(register.rejected, () => {
                console.error("Rejected register user");
            })
    }
});

export default UserSlice.reducer;