import {createSlice} from "@reduxjs/toolkit";
import {CountdownModel} from "../model/countdown-model";

const initialState: {countdowns: CountdownModel[]} = {
    countdowns: [],
};

export type CountdownRootState = {
    countdown: {
        countdowns: Array<{
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
        }
    },
    extraReducers: (builder) => {

    }
});

export const {addCard} = CountdownSlice.actions;
export default CountdownSlice.reducer;