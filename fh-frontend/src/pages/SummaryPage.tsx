import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AccountsTable from 'accounts/AccountsTable';
import FinalAmount from 'accounts/FinalAmount';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadAccounts, selectAccounts } from 'accounts/accountsSlice'

export default function SummaryPage() {
    const dispatch = useAppDispatch();
    const accounts = useAppSelector(selectAccounts);

    useEffect(() => {
        dispatch(loadAccounts());
    }, [dispatch]);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <AccountsTable accounts={accounts}/>
                </Grid>
                <Grid item xs={4}>
                    <FinalAmount />
                </Grid>
            </Grid>
        </Box>
    );
}