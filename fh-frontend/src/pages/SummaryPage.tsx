import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AccountsTable from 'accounts/AccountsTable';
import FinalAmount from 'accounts/FinalAmount';

export default function SummaryPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <AccountsTable />
                </Grid>
                <Grid item xs={4}>
                    <FinalAmount />
                </Grid>
            </Grid>
        </Box>
    );
}