import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from 'app/store';


interface Money {
    amount: number,
    currency: string
}
export interface Account {
    id: number,
    name: string,
    balance: Money
}


interface AccountsState {
    accounts: Account[];
}

const initialState: AccountsState = {
    accounts: [],
};

export const loadAccounts = createAsyncThunk(
    'accounts/loadAccounts',
    async () => {
        const response = await fetch('/api/accounts/list');
        // The value we return becomes the `fulfilled` action payload
        return response.json();
    }
);

export const updateAccount = createAsyncThunk(
    'accounts/updateAccount',
    async ({ account, balance }: { account: Account, balance: Money }, thunkAPI) => {
        await fetch(`/api/accounts/account/${account.id}`, {
            method: 'PUT',
            body: JSON.stringify(balance),
            headers: {
                "Content-Type": "application/json",
              },
        });
        toast.success(`Account "${account.name}" was updated`)
        thunkAPI.dispatch(loadAccounts())
    }
);

export const deleteAccount = createAsyncThunk(
    'accounts/deleteAccount',
    async (id: number, thunkAPI) => {
        await fetch(`/api/accounts/account/${id}`, { method: 'DELETE' });
        thunkAPI.dispatch(loadAccounts())
    }
);

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(loadAccounts.fulfilled, (state, action) => {
                state.accounts = action.payload;
            })
    },
});

export const selectAccounts = (state: RootState) => state.accounts.accounts;

export default accountsSlice.reducer;
