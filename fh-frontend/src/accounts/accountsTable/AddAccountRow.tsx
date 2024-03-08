import React, { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

import { createAccount } from 'accounts/accountsSlice'

const AddAccountRow = () => {
    const dispatch = useAppDispatch();
    const [_name, setName] = useState("");
    const [_isEdit, setIsEdit] = useState(false);

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    const save = () => {
        if (!!_name) {
            const balance = { amount: 0, currency: 'RUB' }
            dispatch(createAccount({ name: _name, balance }));
        }
        setIsEdit(false);
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLTableCellElement>) => {
        if (_isEdit && event.key === 'Enter') {
            save();
        }
    }

    const renderContent = () => {
        const label = "Add New Account";
        if (_isEdit) {
            return (
                <div className="b-add-account-row__content">
                    {label + ":"}
                    <TextField
                        id="account-name"
                        className="b-add-account-row__content-form"
                        variant="standard"
                        error={!_name}
                        onChange={(event) => setName(event.target.value)}
                        onKeyUp={onKeyUp}
                        autoFocus
                    />
                </div>
            );
        }
        return label;
    }

    return (
        <TableRow
            className="b-add-account-row"
            onClick={() => updateEditMode(true)}
            onBlur={() => updateEditMode(false)}
        >
            <TableCell colSpan={5}>{renderContent()}</TableCell>
        </TableRow>
    );
}

export default AddAccountRow;