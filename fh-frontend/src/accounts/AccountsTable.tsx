import React, { FC, ReactElement } from 'react';
import { useAppDispatch } from 'app/hooks';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Account, deleteAccount } from 'accounts/accountsSlice'

interface AccountsTableProps {
    accounts: Account[],
}

const AccountsTable: FC<AccountsTableProps> = ({ accounts }): ReactElement => {
    const dispatch = useAppDispatch();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Balance</TableCell>
                        <TableCell align="right">Currency</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((account) => (
                        <TableRow key={account.id}>
                            <TableCell component="th" scope="row">{account.id}</TableCell>
                            <TableCell align="right">{account.name}</TableCell>
                            <TableCell align="right">{account.balance.amount}</TableCell>
                            <TableCell align="right">{account.balance.currency}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="edit">
                                    <EditIcon fontSize='small' />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => dispatch(deleteAccount(account.id))}>
                                    <DeleteIcon fontSize='small' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default AccountsTable;
