import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AccountsTable from 'accounts/AccountsTable';
import FinalAmount from 'accounts/FinalAmount';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadAccounts, selectAccounts } from 'accounts/accountsSlice';
import { loadCurrency, selectCurrencyRateMap } from 'currency/currencySlice';

export default function SummaryPage() {
    const dispatch = useAppDispatch();
    const accounts = useAppSelector(selectAccounts);
    const currencyRateMap = useAppSelector(selectCurrencyRateMap);

    useEffect(() => {
        dispatch(loadAccounts());
        dispatch(loadCurrency());
    }, [dispatch]);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <AccountsTable accounts={accounts}/>
                </Grid>
                <Grid item xs={2}>
                    <FinalAmount accounts={accounts} currencyRateMap={currencyRateMap}/>
                </Grid>
            </Grid>
        </Box>
    );
}