import React, { FC, ReactElement } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AccountState } from 'accounts/accountsSlice'
import AccountHistoryRow from './AccountHistoryRow';
import './AccountHistoryTable.scss';

interface AccountHistoryTableProps {
    accountHistory: AccountState[],
}

const AccountsTable: FC<AccountHistoryTableProps> = ({ accountHistory }): ReactElement => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Balance</TableCell>
                        <TableCell align="left">Currency</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accountHistory.map((accountState) => <AccountHistoryRow key={accountState.id} accountState={accountState} />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AccountsTable;
