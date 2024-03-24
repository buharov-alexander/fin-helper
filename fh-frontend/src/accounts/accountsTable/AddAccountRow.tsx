import React, { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SaveIcon from '@mui/icons-material/Save';

import { createAccount } from 'accounts/accountsSlice'

const AddAccountRow = () => {
    const dispatch = useAppDispatch();
    const [_name, setName] = useState("");
    const [_amount, setAmount] = useState("0");
    const [_currency, setCurrency] = useState("RUB");
    const [_isEdit, setIsEdit] = useState(false);

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    const save = () => {
        if (!!_name) {
            const balance = { amount: Number(_amount), currency: _currency }
            dispatch(createAccount({ name: _name, balance }));
        }
        setIsEdit(false);
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
        if (_isEdit && event.key === 'Enter') {
            save();
        }
    }

    const isPartOfRow = (currentTarget: (EventTarget & Element), relatedTarget: (EventTarget & Element)) =>
        currentTarget.contains(relatedTarget) || relatedTarget.classList.contains('b-add-account-row__option')

    const renderContent = () => {
        if (_isEdit) {
            return (
                <React.Fragment>
                    <TableCell style={{ width: '10%' }}>New</TableCell>
                    <TableCell style={{ width: '20%' }}>
                        <TextField
                            id="account-name"
                            variant="standard"
                            error={!_name}
                            onChange={(event) => setName(event.target.value)}
                            onKeyUp={onKeyUp}
                            autoFocus
                        />
                    </TableCell>
                    <TableCell style={{ width: '200px' }}>
                        <TextField
                            id="account-amount"
                            variant="standard"
                            error={isNaN(Number(_amount))}
                            value={_amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </TableCell>
                    <TableCell style={{ width: '20%' }}>
                        <FormControl variant="standard">
                            <Select
                                id="account-currency"
                                value={_currency}
                                onChange={(event) => setCurrency(event.target.value)}
                            >
                                <MenuItem className="b-add-account-row__option" value={"RUB"}>RUB</MenuItem>
                                <MenuItem className="b-add-account-row__option" value={"EUR"}>EUR</MenuItem>
                                <MenuItem className="b-add-account-row__option" value={"USD"}>USD</MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell align="right">
                        <IconButton
                            aria-label="save"
                            onClick={save}
                            disabled={!_name || isNaN(Number(_amount))}
                        >
                            <SaveIcon fontSize='small' />
                        </IconButton>
                    </TableCell>
                </React.Fragment>
            );
        }
        return <TableCell colSpan={5}>Add New Account</TableCell>;
    }

    return (
        <TableRow
            className="b-add-account-row"
            onClick={() => updateEditMode(true)}
            onBlur={(event) => {
                if (!event.relatedTarget || !isPartOfRow(event.currentTarget, event.relatedTarget)) {
                    updateEditMode(false);
                }
            }}
        >
            {renderContent()}
        </TableRow>
    );
}

export default AddAccountRow;