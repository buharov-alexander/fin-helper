import React, { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';

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
                        />
                    </TableCell>
                    <TableCell style={{ width: '20%' }}>
                        <TextField
                            id="account-currency"
                            variant="standard"
                        />
                    </TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="save" onClick={save}>
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
            onBlur={() => updateEditMode(false)}
        >
            {renderContent()}
        </TableRow>
    );
}

export default AddAccountRow;