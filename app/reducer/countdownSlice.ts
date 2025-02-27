import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CountdownModel} from "../model/countdown-model";
import {api} from "../api/api";

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
            note: string;
            selectedUnits: string[]
        }>
    }
};

export const saveCard = createAsyncThunk(
    'countdown/saveCard',
    async (card: CountdownModel, { dispatch }) => {
        try {
            const response = await api.post("countdown/saveCard", card);
            dispatch(getAllCards());
            return response.data;
        } catch (e) {
            console.error("Failed to save card!", e);
            throw e;
        }
    }
)

export const getAllCards = createAsyncThunk(
    'countdown/getAllCards',
    async () => {
        try {
            const response = await api.get('countdown/getAllCards');
            return response.data;
        } catch (e) {
            console.error("Failed to get all cards!", e);
            throw e;
        }
    }
)

const CountdownSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        // updateCard: (state, action) => {
        //     const index = state.countdowns.findIndex(c => c.id === action.payload.id);
        //     if (index !== -1) {
        //         state.countdowns[index] = action.payload;
        //     }
        // },
        // deleteCard: (state,action) => {
        //     state.countdowns = state.countdowns.filter((c) => c.id !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCard.fulfilled, (state, action) => {
                if (action.payload) {
                    state.countdowns = [...state.countdowns, action.payload]
                }
            })
            .addCase(saveCard.pending, () => {
                console.error("Pending save vehicle");
            })
            .addCase(saveCard.rejected, () => {
                console.error("Rejected save vehicle");
            })
            .addCase(getAllCards.fulfilled, (state, action) => {
                state.countdowns = action.payload || [];
            })
            .addCase(getAllCards.pending, () => {
                console.error("Pending get all cards");
            })
            .addCase(getAllCards.rejected, () => {
                console.error("Rejected get all cards");
            })
    }
});

export default CountdownSlice.reducer;