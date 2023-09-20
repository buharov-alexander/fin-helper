import React, { FC, ReactElement } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Account, deleteAccount } from 'accounts/accountsSlice'


interface AccountRowProps {
    account: Account,
}

const AccountRow: FC<AccountRowProps> = ({ account }): ReactElement => {
    const dispatch = useAppDispatch();

    return (
        <TableRow>
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
    );
}

export default AccountRow;