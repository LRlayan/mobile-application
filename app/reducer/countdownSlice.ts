import {createSlice} from "@reduxjs/toolkit";
import {CountdownModel} from "../model/countdown-model";

const initialState: {countdowns: CountdownModel[]} = {
    countdowns: [],
};

export const CountdownRoots = {
    countdown: {
        countdowns: Array<{
            title: string;
            date: string;
            time: string;
            repeat: string;
            color: string;
            notes: string;
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