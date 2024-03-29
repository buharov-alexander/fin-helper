import React, { FC, ReactElement } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Account } from 'accounts/accountsSlice'
import AccountRow from './AccountRow';
import AddAccountRow from './AddAccountRow';
import './AccountsTable.scss';

interface AccountsTableProps {
    accounts: Account[],
}

const AccountsTable: FC<AccountsTableProps> = ({ accounts }): ReactElement => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Balance</TableCell>
                        <TableCell align="left">Currency</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((account) => <AccountRow key={account.id} account={account} />)}
                    <AddAccountRow />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AccountsTable;
