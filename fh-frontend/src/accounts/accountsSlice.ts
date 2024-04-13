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

export interface AccountState {
    id: number,
    accountId: number,
    date: number,
    balance: Money
}

interface AccountDetails {
    states: AccountState[],
    account?: Account,
}

interface AccountsState {
    accounts: Account[],
    accountDetails: AccountDetails,
}

const initialState: AccountsState = {
    accounts: [],
    accountDetails: {states: []},
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
        await fetch(`/api/accounts/${account.id}`, {
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

export const createAccount = createAsyncThunk(
    'accounts/createAccount',
    async ({ name, balance }: { name: String, balance: Money }, thunkAPI) => {
        await fetch(`/api/accounts`, {
            method: 'POST',
            body: JSON.stringify({name, balance}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        toast.success(`Account "${name}" was created`)
        thunkAPI.dispatch(loadAccounts())
    }
);

export const deleteAccount = createAsyncThunk(
    'accounts/deleteAccount',
    async (id: number, thunkAPI) => {
        await fetch(`/api/accounts/${id}`, { method: 'DELETE' });
        toast.success(`Account was deleted`)
        thunkAPI.dispatch(loadAccounts())
    }
);

export const addAccountState = createAsyncThunk(
    'accounts/addAccountState',
    async (state: AccountState, thunkAPI) => {
        await fetch(`/api/account-states/create`, {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json",
            },
        });
        toast.success(`Account state was added`)
        thunkAPI.dispatch(loadAccountDetails(state.accountId))
    }
);

export const deleteAccountState = createAsyncThunk(
    'accounts/deleteAccountState',
    async (state: AccountState, thunkAPI) => {
        await fetch(`/api/account-states/${state.id}`, { method: 'DELETE' });
        toast.success(`Account state was deleted`)
        thunkAPI.dispatch(loadAccountDetails(state.accountId))
    }
);

export const loadAccountDetails = createAsyncThunk(
    'accounts/loadAccountDetails',
    async (id: number) => {
        const responseAccount = await fetch(`/api/accounts/${id}`, { method: 'GET' });
        const account = await responseAccount.json();
        const responseStates = await fetch(`/api/account-states/account/${id}`, { method: 'GET' });
        const states = await responseStates.json();
        return { states, account } as AccountDetails;
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
            .addCase(loadAccountDetails.fulfilled, (state, action) => {
                state.accountDetails = action.payload;
            })
    },
});

export const selectAccounts = (state: RootState) => state.accounts.accounts;
export const selectAccountDetails = (state: RootState) => state.accounts.accountDetails;

export default accountsSlice.reducer;
