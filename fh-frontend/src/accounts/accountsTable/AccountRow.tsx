import React, { FC, ReactElement, useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

import { Account, deleteAccount, updateAccount } from 'accounts/accountsSlice'


interface AccountRowProps {
    account: Account,
}

const AccountRow: FC<AccountRowProps> = ({ account }): ReactElement => {
    const dispatch = useAppDispatch();
    const [_amount, setAmount] = useState(account.balance.amount.toString());
    const [_isEdit, setIsEdit] = useState(false);

    const amountView = _isEdit ? (
        <TextField
            id="balance-amount"
            variant="standard"
            defaultValue={account.balance.amount}
            error={isNaN(Number(_amount))}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
        />
    ) : account.balance.amount;

    const save = () => {
        if (account.balance.amount !== Number(_amount)) {
            const balance = { amount: Number(_amount), currency: account.balance.currency }
            dispatch(updateAccount({ account, balance }));
        }
        setIsEdit(false);
    }

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
        if (_isEdit && event.key === 'Enter') {
            save();
        }
    }

    const rowClassName = _isEdit ? "b-account-row" : "b-account-row b-account-row__not-edit";
    return (
        <TableRow className={rowClassName}>
            <TableCell style={{ width: '10%' }} align="left">{account.id}</TableCell>
            <TableCell style={{ width: '20%' }} align="left">
                <Link className="b-link" to={`accounts/${account.id}`}>{account.name}</Link>
            </TableCell>
            <TableCell
                style={{ width: '200px' }}
                align="left"
                className="b-account-row__balance"
                onClick={() => updateEditMode(true)}
                onBlur={() => updateEditMode(false)}
                onKeyUp={onKeyUp}
            >
                {amountView}
            </TableCell>
            <TableCell style={{ width: '20%' }} align="left">{account.balance.currency}</TableCell>
            <TableCell align="right">
                {_isEdit ? (
                    <div style={{ display: 'inline' }}>
                        <IconButton aria-label="save" onClick={save}>
                            <SaveIcon fontSize='small' />
                        </IconButton>
                        <IconButton aria-label="cancel" onClick={() => updateEditMode(false)}>
                            <CancelIcon fontSize='small' />
                        </IconButton>
                    </div>
                ) : (
                    <IconButton aria-label="edit" onClick={() => updateEditMode(true)}>
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