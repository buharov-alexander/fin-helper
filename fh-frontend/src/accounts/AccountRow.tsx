import React, { FC, ReactElement, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

import { Account, deleteAccount } from 'accounts/accountsSlice'


interface AccountRowProps {
    account: Account,
}

const AccountRow: FC<AccountRowProps> = ({ account }): ReactElement => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(account.balance.amount.toString());


    return (
        <TableRow>
            <TableCell component="th" scope="row">{account.id}</TableCell>
            <TableCell align="right">{account.name}</TableCell>
            <TableCell align="right">
                <TextField
                    id="balance-amount"
                    variant="standard"
                    defaultValue={account.balance.amount}
                    error={isNaN(Number(amount))}
                    onChange={(event) => setAmount(event.target.value)}
                />
            </TableCell>
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