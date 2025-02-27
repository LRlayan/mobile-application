import {configureStore} from "@reduxjs/toolkit";
import CountdownSlice from "../reducer/countdownSlice"
import UserSlice from "../reducer/userSlice";

export const store = configureStore({
    reducer: {
        countdown: CountdownSlice,
        user: UserSlice
    }
});

export type AppDispatch = typeof store.dispatch;