import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from "react-router-dom";

import AccountHistoryTable from 'accounts/historyTable/AccountHistoryTable';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadAccountDetails, selectAccountDetails } from 'accounts/accountsSlice';

export default function AccountPage() {
    let { id } = useParams();
    const dispatch = useAppDispatch();
    const accountDetails = useAppSelector(selectAccountDetails);

    useEffect(() => {
        dispatch(loadAccountDetails(Number(id)));
    }, [dispatch, id]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Breadcrumbs aria-label="breadcrumb" className='b-breadcrumb'>
                <Link
                    underline="hover"
                    color="inherit"
                    to="/"
                    component={RouterLink as any}
                >
                    Accounts
                </Link>
                <Typography color="text.primary">{accountDetails.account?.name}</Typography>
            </Breadcrumbs>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <AccountHistoryTable accountHistory={accountDetails.states} account={accountDetails.account} />
                </Grid>
            </Grid>
        </Box>
    );
}