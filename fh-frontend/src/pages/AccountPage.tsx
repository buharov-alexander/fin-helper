import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AccountHistoryTable from 'accounts/historyTable/AccountHistoryTable';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadAccountHistory, selectAccountHistory } from 'accounts/accountsSlice';

export default function AccountPage() {
    let { id } = useParams();
    const dispatch = useAppDispatch();
    const accountHistory = useAppSelector(selectAccountHistory);

    useEffect(() => {
        dispatch(loadAccountHistory(Number(id)));
    }, [dispatch, id]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AccountHistoryTable accountHistory={accountHistory} />
                </Grid>
            </Grid>
        </Box>
    );
}