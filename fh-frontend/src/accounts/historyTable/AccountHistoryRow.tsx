import React, { FC, ReactElement } from 'react';
import moment from 'moment';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { AccountState } from 'accounts/accountsSlice'


interface AccountHistoryRowProps {
    accountState: AccountState,
}

const AccountRow: FC<AccountHistoryRowProps> = ({ accountState }): ReactElement => {
    const formattedDate = moment(accountState.date).format("MM-DD-YYYY");
    return (
        <TableRow>
            <TableCell align="left">{formattedDate}</TableCell>
            <TableCell align="left">{accountState.balance.amount}</TableCell>
            <TableCell align="left">{accountState.balance.currency}</TableCell>
        </TableRow>
    );
}

export default AccountRow;