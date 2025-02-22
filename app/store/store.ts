import {configureStore} from "@reduxjs/toolkit";
import CountdownSlice from "../reducer/countdownSlice"

export const store = configureStore({
    reducer: {
        countdown: CountdownSlice,
    }
});

export type AppDispatch = typeof store.dispatch;