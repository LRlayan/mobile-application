import {createSlice} from "@reduxjs/toolkit";
import {CountdownModel} from "../model/countdown-model";

const initialState: {countdowns: CountdownModel[]} = {
    countdowns: [],
};

export type CountdownRootState = {
    countdown: {
        countdowns: Array<{
            id: number;
            title: string;
            date: Date;
            time: { hours: number; minutes: number } | undefined;
            repeat: string;
            color: string;
            notes: string;
            selectedUnits: string[]
        }>
    }
}

const CountdownSlice = createSlice({
    name: 'countdownSlice',
    initialState,
    reducers: {
        addCard: (state,action) => {
            state.countdowns.push(action.payload);
        },
        updateCard: (state, action) => {
            const index = state.countdowns.findIndex(c => c.id === action.payload.id);
            if (index !== -1) {
                state.countdowns[index] = action.payload;
            }
        },
        deleteCard: (state,action) => {
            state.countdowns = state.countdowns.filter((c) => c.id !== action.payload);
        }
    },
    extraReducers: (builder) => {

    }
});

export const {addCard,updateCard,deleteCard} = CountdownSlice.actions;
export default CountdownSlice.reducer;