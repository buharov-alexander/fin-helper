import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useAppDispatch } from 'app/hooks';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Account, AccountState, addAccountState } from 'accounts/accountsSlice'

const AddAccountHistoryRow = ({ account }: { account?: Account }) => {
    const dispatch = useAppDispatch();
    const [_amount, setAmount] = useState("0");
    const [_date, setDate] = useState<Dayjs | null>(dayjs());
    const [_isEdit, setIsEdit] = useState(false);

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    const save = () => {
        if (!!_date && !!account) {
            const balance = { amount: Number(_amount), currency: account.balance.currency }
            dispatch(addAccountState({ accountId: account.id, balance, date: _date.toDate().getTime() } as AccountState));
        }
        setIsEdit(false);
    }

    const renderContent = () => {
        if (_isEdit) {
            return (
                <React.Fragment>
                    <TableCell align="left">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date"
                                value={_date}
                                onChange={(date) => setDate(date)}
                            />
                        </LocalizationProvider>
                    </TableCell>
                    <TableCell align="left">
                        <TextField
                            id="account-amount"
                            variant="standard"
                            error={isNaN(Number(_amount))}
                            value={_amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="right">
                        <IconButton
                            aria-label="save"
                            onClick={save}
                            disabled={isNaN(Number(_amount))}
                        >
                            <SaveIcon fontSize='small' />
                        </IconButton>
                    </TableCell>
                </ React.Fragment>
            );
        }
        return <TableCell colSpan={5}>Add Account State</TableCell>;
    }

    return (
        <TableRow
            className="b-add-account-row"
            onClick={() => updateEditMode(true)}
        >
            {renderContent()}
        </TableRow>
    );
}

export default AddAccountHistoryRow;