import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface CurrencyState {
    rates: {[currencyCode: string]: number}
}

const initialState: CurrencyState = {
    rates: {}
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
                state.rates = {...state.rates, ...action.payload};
            });
    },
});

export const selectCurrencyRates = (state: RootState) => state.currency.rates;
export const selectCurrencyRateMap = createSelector(
    [selectCurrencyRates],
    rates => new Map(Object.entries(rates))
);

export default currencySlice.reducer;
