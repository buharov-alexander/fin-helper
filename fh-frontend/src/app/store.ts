import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from 'accounts/accountsSlice';
import currencyReducer from 'currency/currencySlice';

const store = configureStore({
    reducer: {
        accounts: accountsReducer,
        currency: currencyReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;