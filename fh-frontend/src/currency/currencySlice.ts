import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface CurrencyState {
    rates: Map<string, number>
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
                state.rates = new Map(Object.entries(action.payload));
            });
    },
});

export const selectCurrencyRates = (state: RootState) => state.currency.rates;

export default currencySlice.reducer;
