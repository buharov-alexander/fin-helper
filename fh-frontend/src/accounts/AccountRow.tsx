import React, { FC, ReactElement, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

import { Account, deleteAccount, updateAccount } from 'accounts/accountsSlice'


interface AccountRowProps {
    account: Account,
}

const AccountRow: FC<AccountRowProps> = ({ account }): ReactElement => {
    const dispatch = useAppDispatch();
    const [amount, setAmount] = useState(account.balance.amount.toString());
    const [isEdit, setIsEdit] = useState(false);

    const amountView = isEdit ? (
        <TextField
            id="balance-amount"
            variant="standard"
            defaultValue={account.balance.amount}
            error={isNaN(Number(amount))}
            onChange={(event) => setAmount(event.target.value)}
        />
    ) : account.balance.amount;

    const save = () => {
        const balance = { amount: Number(amount), currency: account.balance.currency }
        dispatch(updateAccount({ id: account.id, balance }));
        setIsEdit(false);
    }

    return (
        <TableRow>
            <TableCell align="left">{account.id}</TableCell>
            <TableCell align="left">{account.name}</TableCell>
            <TableCell style={{ width: '200px' }} align="left">
                {amountView}
            </TableCell>
            <TableCell align="left">{account.balance.currency}</TableCell>
            <TableCell align="right">
                {isEdit ? (
                    <IconButton aria-label="save" onClick={save}>
                        <SaveIcon fontSize='small' />
                    </IconButton>
                ) : (
                    <IconButton aria-label="edit" onClick={() => setIsEdit(true)}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                )}
                <IconButton aria-label="delete" onClick={() => dispatch(deleteAccount(account.id))}>
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default AccountRow;