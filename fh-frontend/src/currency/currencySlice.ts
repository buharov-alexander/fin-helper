import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ESMap } from 'typescript';


interface CurrencyState {
    rates: ESMap<string, number>
}

const initialState: CurrencyState = {
    rates: new Map()
};

export const loadCurrency = createAsyncThunk(
    'currency/loadCurrency',
    async () => {
        const response = await fetch('/currency/daily');
        return response.json();
    }
);

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrency.fulfilled, (state, action) => {
                state.rates = action.payload;
            });
    },
});

export const selectCurrency = (state: RootState) => state.currency.rates;

export default currencySlice.reducer;
