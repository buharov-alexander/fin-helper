import React, { FC, ReactElement } from 'react';
import { useAppDispatch } from 'app/hooks';
import moment from 'moment';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { AccountState, deleteAccountState } from 'accounts/accountsSlice'

interface AccountHistoryRowProps {
    accountState: AccountState,
}

const AccountHistoryRow: FC<AccountHistoryRowProps> = ({ accountState }): ReactElement => {
    const dispatch = useAppDispatch();

    const formattedDate = moment(accountState.date).format("MM-DD-YYYY");
    return (
        <TableRow>
            <TableCell align="left">{formattedDate}</TableCell>
            <TableCell align="left">{accountState.balance.amount}</TableCell>
            <TableCell align="left">{accountState.balance.currency}</TableCell>
            <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => dispatch(deleteAccountState(accountState))}>
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default AccountHistoryRow;